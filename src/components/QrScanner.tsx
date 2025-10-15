import { useState, useEffect, useRef } from 'react';
import { CameraDevice, Html5Qrcode } from 'html5-qrcode';

const QRScanner = () => {
    const [address, setAddress] = useState('');
    const [showScanner, setShowScanner] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [error, setError] = useState('');
    const [cameras, setCameras] = useState<CameraDevice[]>([]);
    const [selectedCamera, setSelectedCamera] = useState('');
    const scannerRef = useRef<HTMLDivElement | null>(null);
    const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

    // Validate TON address format
    const validateTonAddress = (address: string) => {
        // Basic TON address validation (starts with EQ, UQ, or 0: and has correct length)
        const tonAddressRegex = /^(EQ|UQ|KQ|0Q|0:)[A-Za-z0-9_-]{46,48}$/;
        const rawAddressRegex = /^0:[a-fA-F0-9]{64}$/;
        return tonAddressRegex.test(address) || rawAddressRegex.test(address);
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

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
        alert('Address copied to clipboard!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        TON Address Scanner
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Scan QR codes to capture TON blockchain addresses
                    </p>

                    {/* Camera Selection */}
                    {cameras.length > 1 && !isScanning && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Camera
                            </label>
                            <select
                                value={selectedCamera}
                                onChange={(e) => setSelectedCamera(e.target.value)}
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

                    {/* QR Scanner */}
                    <div className="mb-6">
                        <div
                            id="qr-reader"
                            ref={scannerRef}
                            className="w-full rounded-lg overflow-hidden border-4 border-gray-200"
                            style={{ minHeight: isScanning ? '300px' : '0' }}
                        ></div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex gap-4 mb-6">
                        {!isScanning ? (
                            <button
                                onClick={startScanning}
                                disabled={!selectedCamera}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md"
                            >
                                Start Scanning
                            </button>
                        ) : (
                            <button
                                onClick={stopScanning}
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md"
                            >
                                Stop Scanning
                            </button>
                        )}
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                            <p className="font-medium">Error:</p>
                            <p className="text-sm">{error}</p>
                        </div>
                    )}

                    {/* Scanned Address Display */}
                    {address && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-800 mb-3">
                                ✓ Address Scanned Successfully
                            </h3>
                            <div className="bg-white rounded-lg p-4 mb-4 border border-green-300">
                                <p className="text-sm text-gray-600 mb-1">TON Address:</p>
                                <p className="font-mono text-sm break-all text-gray-800">
                                    {address}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={copyToClipboard}
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                                >
                                    Copy Address
                                </button>
                                <button
                                    onClick={() => setAddress('')}
                                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Instructions */}
                    <div className="mt-8 bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Instructions:</h4>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Click "Start Scanning" to activate the camera</li>
                            <li>• Point your camera at a QR code containing a TON address</li>
                            <li>• The scanner will automatically detect and validate the address</li>
                            <li>• Valid TON addresses start with EQ, UQ, or 0:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRScanner;
