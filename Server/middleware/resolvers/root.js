const queryResolver = {
    randNum: ({ num, maxNum }) => {
        let output = [];
        for (let i = 0; i < num; i++) {
            output.push(1 + Math.floor(Math.random() * (maxNum || 10)));
        }
        return output;
    },
};

export default queryResolver;