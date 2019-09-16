export default (req, res) => {
    //console.log("el objeto req de /items/:id ", req);
    res.status(200).json({ message: 'Response from /items/id' })
}