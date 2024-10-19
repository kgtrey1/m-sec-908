import 'dart:io';

import 'package:alfred/alfred.dart';
import 'package:process_run/shell.dart';

final _uploadDirectory = Directory('uploadedFiles');

Future serve() async {
  final app = Alfred();

  app.get('/', (req, res) {
    res.headers.contentType = ContentType.html;
    res.write("<html charset='utf-8'><head><meta charset='utf-8'></meta><title>Powerzio | Social Wall</title></head><body>");
    res.write("<link rel='stylesheet' href='//cdn.powerzio.net/css/social.css'>");
    res.write("<script type='text/javascript' src='//cdn.powerzio.net/js/social.js'></script>");
    res.write("<style>body {background: dodgerblue; color: aliceblue;"
        "}</style>");

    res.write("<h1>Welcome to your company's social wall</h1>");
    res.write("<p>Upload a picture to share with the team and its collaborators!</p>");

    res.write("<form action='/upload' method='post' "
        "enctype='multipart/form-data'>"
        "<input type='file' name='file'>"
        "<input type='submit'>"
        "</form><div class='container'>");

    _uploadDirectory.listSync().forEach((file) {
      res.write('<div class="social_image"><img src="/files/${file.path.split("/").last}" /><p>Posted by <b>Powerzio</b>©</p></div>');
    });
    res.write("</div></body></html>");
  });
  app.get('/files/*', (req, res) => _uploadDirectory);
  app.post('/upload', (req, res) async {
    final body = await req.bodyAsJsonMap;

    if (await _uploadDirectory.exists() == false) {
      await _uploadDirectory.create();
    }

    final uploadedFile = (body['file'] as HttpBodyFileUpload);
    var fileBytes = (uploadedFile.content as List<int>);

    final file =
        await File('${_uploadDirectory.absolute.path}/${uploadedFile.filename}')
            .writeAsBytes(fileBytes);

    final cmd =
        'convert ${file.path} -gravity center -extent 200x200 ${file.path}';

    var shell = Shell();
    await shell.run("bash -c '$cmd'");

    res.headers.contentType = ContentType.html;

    res.write('<script>window.location = "/";</script>');
  });

  return app.listen(80);
}
