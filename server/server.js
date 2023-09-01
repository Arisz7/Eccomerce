// sk_test_51NSPrZE6e0Wxbo9SdkrkwE1aY3gklfL2sM2jrZVrP7iqK9P2julhfrMXYXWxDppy3LdfpZQ14f0B4V2SYSjZDkKr00xn9BYyDC
// Tnaga victoria secret: price_1NlKvZE6e0Wxbo9SPGPlCWN9

const express = require('express')
var cors = require('cors')
const stripe = require('stripe')('sk_test_51NSPrZE6e0Wxbo9SdkrkwE1aY3gklfL2sM2jrZVrP7iqK9P2julhfrMXYXWxDppy3LdfpZQ14f0B4V2SYSjZDkKr00xn9BYyDC')

const app = express();
app.use(cors())
app.use(express.static('public'));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    console.log(req.body)
    const items = req.body.items;
    let arrItems = [];

    items.forEach((item) => {
        arrItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: arrItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(8080, () => console.log("Listening on port 8080"))
