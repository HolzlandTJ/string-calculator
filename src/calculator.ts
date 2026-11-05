export function add(text: string): number {
    const parts = text.split(",")
    let sum = 0;

    for (const item of parts){
        sum=Number(item)+sum;
    };
    return sum; 
};