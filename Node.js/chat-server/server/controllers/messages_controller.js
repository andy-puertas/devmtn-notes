// initiate values that will be available to our controller locally
let messages = [];
let id = 0;

module.exports = {
    // method to create a new message
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages );
    },

    // method to read/return new messages
    read: (req, res) => {
        // if all goes well, send the array back
        res.status(200).send( messages );
    },

    update: (req, res) => {
        // define the anticipated params and body
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        let message = messages[ messageIndex ];

        // define the new message
        // what data do we want to pull forward?
        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        // if all goes well, send the array back
        res.status(200).send( messages );
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        // if all goes well...
        res.status(200).send( messages );
    }
};