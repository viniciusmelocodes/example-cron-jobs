export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export function GET(request: Request) {
    fetch('https://api.telegram.org/bot2127657888:AAFg-pNDY2OhgqQhsiVpfdiCK0SiIyBjLME/sendMessage?chat_id=97153814&text=Hi+Everyone')
    .then((data) => console.log(data.json()));
    console.log('Date now:', new Date().toISOString());
    return new Response(`Hello from ${process.env.VERCEL_REGION}, ${new Date().toISOString()}`);
}