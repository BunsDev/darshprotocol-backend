module.exports = mongoose => {
    const schema = mongoose.Schema({
        offerId: {
            type: Number
        },
        from: {
            type: String
        },
        to: {
            type: String
        },
        amount: {
            type: String
        },
        token: {
            type: String
        },
        hash: {
            type: String
        },
        timestamp: {
            Number
        }
    }, { timestamps: false });

    return mongoose.model("transfers", schema);
};
