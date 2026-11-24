# Pemilihan Ketua OSIS SMP Negeri 3 Jayapura Periode 2026/2027

Sistem E-Voting & Live Vote Count berbasis Web (GitHub Pages / Hosting Statis) terintegrasi Google Apps Script & Google Sheets (`PO26`).

## Struktur File
- `kode.gs` : Kode backend Google Apps Script untuk membaca & menulis suara ke Spreadsheet (`PO26`).
- `index.html` : Halaman Dashboard Depan (Judul, 2 Logo, Tombol ke Bilik Pemilihan & Tombol ke Live Vote Count).
- `pemilihan.html` : Halaman Bilik Pemilihan Suara (7 Foto Calon 1:1 susunan 4 atas & 3 bawah + Pop-Up konfirmasi).
- `sukses.html` : Halaman Konfirmasi Suara Terkirim dengan tombol `Pemilih Suara Berikutnya`.
- `live-vote.html` : Halaman Live Vote Count untuk layar IFP / Monitor (Grafik Lingkaran % & Grafik Batang Angka real-time).
- `config.js` : Konfigurasi URL GAS, daftar kandidat, foto, serta preload aset agar perpindahan halaman instan.
- `style.css` : Desain responsif penuh (PC Fullscreen Ratio, IFP, Tablet, HP/Android) dengan tema warna poster resmi.

## Cara Setup Google Apps Script (`kode.gs`)
1. Buka Google Spreadsheet ID `1EJURKILWzu-jSj2bJfrRZ0k8KnrnKGhCpNhzLcgghRU`.
2. Klik menu **Ekstensi (Extensions) > Apps Script**.
3. Salin seluruh isi file `kode.gs` ke editor Apps Script, lalu klik **Simpan (Save)**.
4. Jalankan fungsi `setupSheet` sekali untuk memastikan baris 1 (nama calon A1:G1) dan baris 2 (`=SUM(A3:A)` s.d. `=SUM(G3:G)`) otomatis terbentuk pada sheet `PO26`.
5. Klik **Deploy > Manage deployments** (atau New deployment sebagai Web App) dengan akses **Anyone (Siapa saja)**.

## Cara Upload ke GitHub Pages
1. Upload semua file (`index.html`, `pemilihan.html`, `sukses.html`, `live-vote.html`, `config.js`, `style.css`, `kode.gs`, `README.md`) ke repository GitHub Anda.
2. Buka **Settings > Pages**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
3. Buka URL GitHub Pages pada **3 PC Bilik** (pilih *Masuk ke Bilik Pemilihan Suara*, tekan `F11` untuk Fullscreen) dan pada **1 Layar IFP** (pilih *Live Vote Count*, tekan `F11`).
