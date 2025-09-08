export default function Footer() {
    return (
        <footer className=" bg-gradient-to-br from-blue-1500 to-white-100 text-white py-16 relative overflow-hidden">
            {/* Background Emoji Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-6xl">💕</div>
                <div className="absolute top-20 right-20 text-4xl">💖</div>
                <div className="absolute bottom-20 left-20 text-5xl">💝</div>
                <div className="absolute bottom-10 right-10 text-3xl">💗</div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="text-6xl mb-6 animate-bounce"><span className="animate-pulse text-pink-500">❤️</span></div>
                    <h3 className="font-serif text-4xl mb-4 font-bold">Success & Felix</h3>
                    <p className="text-xl mb-8 font-medium">Thank you for being part of our love story</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Wedding Details */}
                    <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                            <div className="text-3xl mb-3">📅</div>
                            <h4 className="font-serif text-lg font-bold mb-2">Wedding Day</h4>
                            <p className="text-sm">October 04, 2025</p>
                            <p className="text-sm">Lagos City,Surulere</p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center">
                        <div className="bg-rose-600/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                            <div className="text-3xl mb-3">💌</div>
                            <h4 className="font-serif text-lg font-bold mb-2">Get in Touch</h4>
                            <p className="text-sm">Questions about the wedding?</p>
                            <p className="text-sm">Contact our families: Niyi:09011237831 , Loveth:07066701415</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                            <div className="text-3xl mb-3">📸</div>
                            <h4 className="font-serif text-lg font-bold mb-2">Share the Love</h4>
                            <p className="text-sm">#SuccessAndFelix2025</p>
                            <p className="text-sm">Tag us in your photos!</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center border-t-2 border-white/30 pt-8 bg-black/20 rounded-xl">
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        <div className="w-12 h-0.5 bg-white/50"></div>
                        <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <div className="w-12 h-0.5 bg-white/50"></div>
                    </div>
                    <p className="text-sm opacity-90 font-medium">
                        Made with love @donneyocodes for our special day • October 04, 2025
                    </p>
                    <p className="text-xs opacity-75 mt-2">
                        We can’t wait to celebrate with all of you! 🎉
                    </p>
                </div>
            </div>
        </footer>
    );
}
