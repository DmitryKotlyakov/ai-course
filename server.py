"""Локальный сервер учебного сайта с понятными адресами страниц."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).parent
ROUTES = {
    "/": "index.html",
    "/lesson-1": "lessons/lesson-01.html",
    "/lesson-2": "lessons/lesson-02.html",
    "/lesson-3": "lessons/lesson-03.html",
}


class CourseHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        route = urlparse(path).path
        return str(ROOT / ROUTES.get(route, route.lstrip("/")))


if __name__ == "__main__":
    print("Курс доступен: http://localhost:8000/")
    ThreadingHTTPServer(("127.0.0.1", 8000), CourseHandler).serve_forever()
