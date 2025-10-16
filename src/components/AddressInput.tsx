import { useState, useEffect, useRef } from 'react';
import { CameraDevice, Html5Qrcode } from 'html5-qrcode';

const AddressInput = () => {
  const [address, setAddress] = useState('');
  const [showScanner, setShowScanner] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');
  const [cameras, setCameras] = useState<CameraDevice[]>([]);
  const [selectedCamera, setSelectedCamera] = useState('');
  // const scannerRef = useRef<HTMLDivElement | null>(null);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  // Validate TON address format
  const validateTonAddress = (address: string) => {
    // Basic TON address validation (starts with EQ, UQ, or 0: and has correct length)
    const tonAddressRegex = /^(EQ|UQ|KQ|0Q)[A-Za-z0-9_-]{46,48}$/;
    const rawAddressRegex = /^0:[a-fA-F0-9]{64}$/;
    // return tonAddressRegex.test(address) || rawAddressRegex.test(address);
    return true;
  };

  // Get available cameras
  useEffect(() => {
    if (showScanner && cameras.length === 0) {
      Html5Qrcode.getCameras()
        .then((devices) => {
          if (devices && devices.length) {
            setCameras(devices);
            setSelectedCamera(devices[0].id);
          }
        })
        .catch((err) => {
          setError('Unable to access cameras: ' + err);
        });
    }
  }, [showScanner, cameras.length]);

  // Start scanning
  const startScanning = async () => {
    if (!selectedCamera) {
      setError('No camera selected');
      return;
    }

    try {
      const html5QrCode = new Html5Qrcode('qr-reader');
      html5QrCodeRef.current = html5QrCode;

      await html5QrCode.start(
        selectedCamera,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          // Successfully scanned
          if (validateTonAddress(decodedText)) {
            setAddress(decodedText);
            setError('');
            handleCloseScanner();
            //stopScanning();
          } else {
            setError('Invalid TON address format');
          }
        },
        (errorMessage) => {
          // Scanning error (can be ignored for continuous scanning)
          console.error('QR Code scan error:', errorMessage);
        }
      );

      setIsScanning(true);
      setError('');
    } catch (err) {
      setError('Failed to start scanner: ' + err);
    }
  };

  // Stop scanning
  const stopScanning = async () => {
    const instance = html5QrCodeRef.current;
    if (instance) {
      try {
        await instance.stop();
        await instance.clear();
      } catch (err) {
        console.error('Error stopping scanner:', err);
      } finally {
        html5QrCodeRef.current = null;
        setIsScanning(false);
      }
    }
  };

  // Handle close scanner
  const handleCloseScanner = async () => {
    await stopScanning();
    setShowScanner(false);
  };

  // Auto-start scanning when scanner is shown
  useEffect(() => {
    if (showScanner && selectedCamera && !isScanning) {
      startScanning();
    }
  }, [showScanner, selectedCamera]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const instance = html5QrCodeRef.current;
      if (instance) {
        instance
          .stop()
          .then(() => instance.clear())
          .catch(console.error)
          .finally(() => {
            html5QrCodeRef.current = null;
          });
      }
    };
  }, []);

  // const copyToClipboard = () => {
  //     navigator.clipboard.writeText(address);
  //     alert('Address copied to clipboard!');
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            TON Transfer
          </h1>
          <p className="text-gray-600 mb-8">
            Enter or scan a TON address to send cryptocurrency
          </p>

          {/* Address Input Field with QR Button */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipient Address
            </label>
            <div className="relative">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="EQ... or UQ... or 0:..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              />
              <button
                onClick={() => setShowScanner(true)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition duration-200"
                title="Scan QR Code"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
              </button>
            </div>

            {/* Address Validation Indicator */}
            {address && (
              <div className="mt-2">
                {validateTonAddress(address) ? (
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <span>✓</span> Valid TON address
                  </p>
                ) : (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <span>✗</span> Invalid TON address
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Amount Input (Example) */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount (TON)
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={!address || !validateTonAddress(address)}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md"
          >
            Continue
          </button>
        </div>

        {/* QR Scanner Modal */}
        {showScanner && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Scan QR Code
                </h2>
                <button
                  onClick={handleCloseScanner}
                  className="text-gray-500 hover:text-gray-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Camera Selection */}
              {cameras.length > 1 && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Camera
                  </label>
                  <select
                    value={selectedCamera}
                    onChange={(e) => {
                      setSelectedCamera(e.target.value);
                      if (isScanning) {
                        stopScanning().then(() => {
                          setSelectedCamera(e.target.value);
                        });
                      }
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {cameras.map((camera) => (
                      <option key={camera.id} value={camera.id}>
                        {camera.label || `Camera ${camera.id}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* QR Reader */}
              <div
                id="qr-reader"
                className="w-full rounded-lg overflow-hidden border-4 border-gray-200 mb-4"
                style={{ minHeight: '300px' }}
              ></div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Instructions */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-800">
                  Point your camera at a QR code containing a TON address. The scanner will automatically detect and validate it.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseScanner}
                className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressInput;
