export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export function GET(request: Request) {
    fetch(`https://api.telegram.org/bot2127657888:AAFg-pNDY2OhgqQhsiVpfdiCK0SiIyBjLME/sendMessage?chat_id=97153814&text=Message 2 from ${process.env.VERCEL_REGION} => ${new Date().toISOString()}`)
        .then((data) => console.log(data.json()));

    return new Response(`Hello from ${process.env.VERCEL_REGION}, ${new Date().toISOString()}`);
}