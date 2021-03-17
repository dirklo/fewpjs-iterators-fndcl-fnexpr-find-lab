function superbowlWin(record) {
    if (record.find((x) => x["result"] === "W")) {
        return record.find((x) => x["result"] === "W").year;
    }
}