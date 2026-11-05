export function add(text: string): number {
    const parts = text.replaceAll("\n",",").split(",");
    let negativeNumbersList: String[] = [];
    let sum = 0;

    for (const item of parts){
        if (Number(item)<0){
            negativeNumbersList.push(item);
        } else {
            sum=Number(item)+sum;
        }
    };

    if (negativeNumbersList.length>0){
        throw new Error("negatives not allowed: " + negativeNumbersList.join(", "));
    }
    q
    return sum;
};