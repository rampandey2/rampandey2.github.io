# Ram Prasad Pandey — personal website

A plain HTML/CSS site (no build tools). It works on GitHub Pages for free.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: bio, research interests, news, contact |
| `research.html` | Research themes and tools |
| `publications.html` | Publications by year, with Conference/Journal filter |
| `teaching.html` | Teaching at UW and in Nepal |
| `experience.html` | Web CV: experience, education, awards, service, training |
| `blog.html` | Blog: new posts + archive of Blogspot posts |
| `blog/welcome.html` | First post |
| `blog/_template.html` | Copy this to write a new post |
| `assets/style.css` | All styling (colors are at the top) |
| `assets/Ram_Pandey_CV.pdf` | CV download |

## 1. Add your photo
Save a portrait photo as **`assets/photo.jpg`** (about 480 × 560 px works well).
Until then, the home page shows "RP" initials.

## 2. Publish on GitHub Pages (free, ~15 minutes)
1. Create a free account at https://github.com (e.g. username `rampandey`).
2. Click **New repository**. Name it exactly **`<your-username>.github.io`**
   (e.g. `rampandey.github.io`). Set it to **Public**, then click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Unzip this folder on your computer. Drag **everything inside it** (the HTML files plus the
   `assets` and `blog` folders) into the upload box. Click **Commit changes**.
5. Go to **Settings → Pages**. Under *Build and deployment*, choose
   **Deploy from a branch**, branch **main**, folder **/ (root)**, then click **Save**.
6. After 1–2 minutes, your site is live at **https://<your-username>.github.io**.

## 3. Updating the site
- **Edit text**: on GitHub, open the file, click the pencil icon, edit, and click **Commit changes**.
  The site updates in about a minute.
- **Add news**: in `index.html`, copy one `<li><time>…</time><span>…</span></li>` line inside
  `<ul class="news">` and put it at the top.
- **Add a publication**: in `publications.html`, copy one `<li class="pub" …>` block into the right year.
  Use `data-type="conf"` + `badge conf` for conferences, `data-type="jour"` + `badge jour` for journals.
- **New CV**: replace `assets/Ram_Pandey_CV.pdf`, keeping the same name.

## 4. Writing a new blog post
1. Copy `blog/_template.html` to a new name, e.g. `blog/my-first-post.html`.
2. Change the title, date and category, and write your paragraphs in `<p>…</p>` tags.
   Images go in `assets/` and are referenced as `../assets/image.jpg`.
3. In `blog.html`, under "Latest posts", copy the existing `<a class="post">…</a>` block,
   point its `href` at `blog/my-first-post.html`, and update the date, title and summary.

## Optional: custom domain
Buy a domain (about $10–15/year, e.g. `rampandey.com`). In **Settings → Pages → Custom domain**,
enter it, then follow GitHub's DNS instructions.
