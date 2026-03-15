let a=prompt("Search any unique word");
let mean={
    Sonder: "The profound, sudden realization that every random passerby is living a life as vivid and complex as your own.",
    Apricity: "The warm, fleeting sensation of the sun’s rays on your skin during winter.",
    Vellichor: "The wistful, nostalgic atmosphere found within old or used bookstores.",
    Saudade: "A deep, emotional, and nostalgic longing for someone or something that is absent, often with the knowledge that it might never return."
    };
if(a=="Sonder"){
    document.write(mean["Sonder"]);
}else if(a=="Apricity"){
    document.write(mean["Apricity"]);
}else if(a=="Vellichor"){
    document.write(mean["Vellichor"]);
}else if(a=="Saudade"){
    document.write(mean["Saudade"]);
}else{
    document.write("Not Found");
}