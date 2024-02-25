class StubProductClient {  // mock이 아닌 실제 class임.
    async fetchItems() {
        return [
            { item: "Milk", available: true },
            { item: "Banana", available: false },
        ]
    }
}

module.exports = StubProductClient;