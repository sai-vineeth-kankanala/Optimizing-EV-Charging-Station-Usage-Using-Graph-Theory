import os

def bundle():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()

    with open("index.css", "r", encoding="utf-8") as f:
        css = f.read()

    with open("index.js", "r", encoding="utf-8") as f:
        js = f.read()

    html = html.replace('<link rel="stylesheet" href="index.css">', '<style>\n' + css + '\n</style>')
    html = html.replace('<script src="index.js"></script>', '<script>\n' + js + '\n</script>')

    with open("EV_Routing_App_Standalone.html", "w", encoding="utf-8") as f:
        f.write(html)

if __name__ == "__main__":
    bundle()
