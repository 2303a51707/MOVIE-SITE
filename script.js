function downloadMovie(filePath) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
module.exports = {
    version: "0.2.0",
    configurations: [
        {
            type: "chrome",
            request: "launch",
            name: "Launch Chrome against localhost",
            url: "http://localhost:3000",
            webRoot: "${workspaceFolder}"
        }
    ]
};