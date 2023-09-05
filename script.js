document.getElementById('videoInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const video = document.createElement('video');
        video.src = URL.createObjectURL(file);

        video.addEventListener('loadedmetadata', function() {
            const duration = video.duration;
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60);
            document.getElementById('videoDuration').textContent = `動画の長さ: ${minutes}:${seconds}`;
        });
    }
});

document.getElementById('fetchInfo').addEventListener('click', function() {
    const timecode = document.getElementById('timecode').value;
    // ここでバックエンドにタイムコード情報を送信し、編集情報を取得する処理を実装します。
    // 例: fetch('/api/getInfo', { method: 'POST', body: JSON.stringify({ timecode }) })
    //     .then(response => response.json())
    //     .then(data => {
    //         // 編集情報を表示する処理
    //     });
});
