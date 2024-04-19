export default function ApiGet(url: string) {
    let start = new Date().getTime();
    const URLs = url.split(', ');

    const URL = URLs[0].split('<')[1].split('>')[0].split('=')[0];
    const nextPage = Number(URLs[0].split('<')[1].split('>')[0].split('=')[1]) + 1;
    const lastPage = Number(URLs[1].split('<')[1].split('>')[0].split('=')[1]) + 1;


    const pagination= [""];
    for (let i = nextPage; i <= 1000000; i++) {
        pagination.push(`${URL}=${i}`)
    }
    let end = new Date().getTime();
    let transcurred = end - start;
    console.log("Finalizado en",transcurred);
   /* const pages = Array.from({ length: lastPage }, (_, i) => i + 1); */

    return pagination;
}