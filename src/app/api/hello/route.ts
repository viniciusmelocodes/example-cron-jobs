export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export function GET(request: Request) {
    fetch(`https://api.telegram.org/bot2055543371:AAEiICiuiYj9xcZ1hIoD-Jb06kGEUIf5sQQ/sendMessage?chat_id=97153814&text=${process.env.VERCEL_REGION} => ${new Date().toISOString()}`)
        .then((data) => console.log(data.json()));

    return new Response(`Hello from ${process.env.VERCEL_REGION}, ${new Date().toISOString()}`);
}