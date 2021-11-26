module.exports = {
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "https://admin.smokinbsbbq.tk/:path*",
            },
        ];
    },
};
