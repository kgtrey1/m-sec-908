import 'dart:io';

import 'package:alfred/alfred.dart';
import 'package:process_run/shell.dart';
import 'package:mime/mime.dart';
import 'package:uuid/uuid.dart';

final _uploadDirectory = Directory('uploadedFiles');
final uuid = Uuid();

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

    final mimeType = lookupMimeType(uploadedFile.filename, headerBytes: fileBytes);
    if (mimeType == null || !(mimeType.startsWith('image/png') || mimeType.startsWith('image/jpeg'))) {
      res.statusCode = HttpStatus.unsupportedMediaType;
      res.write("Unsupported file type. Only PNG and JPEG images are allowed.");
      return;
    }

    if (uploadedFile == null || !uploadedFile.filename.endsWith('.png') && !uploadedFile.filename.endsWith('.jpg')) {
      res.statusCode = HttpStatus.unsupportedMediaType;
      res.write("Unsupported file type");
      return;
    }
    final fileExtension = uploadedFile.filename.split('.').last;
    final filename = '${uuid.v4()}.$fileExtension';

    final file =
        await File('${_uploadDirectory.absolute.path}/${filename}')
            .writeAsBytes(fileBytes);

    await Process.run('convert', [file.path, '-gravity', 'center', '-extent', '200x200', file.path]);

    res.headers.contentType = ContentType.html;

    res.write('<script>window.location = "/";</script>');
  });

  return app.listen(80);
}
