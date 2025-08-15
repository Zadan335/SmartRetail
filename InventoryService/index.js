const express = require('express');
const app = express();

app.get('/inventory', (req, res) => {
    res.json({ message: 'Inventory works!' });
});

module.exports = app;

if (require.main === module) {
    app.listen(3001, () => console.log('InventoryService running on port 3001'));
}
