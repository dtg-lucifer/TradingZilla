const randNumResolver = (args) => {
    let output = [];
    for (let i = 0; i < args.num; i++) {
        output.push(1 + Math.floor(Math.random() * (args.maxNum || 10)));
    }
    return output;
};
export default randNumResolver;