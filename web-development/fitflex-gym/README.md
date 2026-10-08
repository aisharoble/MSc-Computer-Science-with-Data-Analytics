# FitFlex Gym Website

A six-page gym website assignment from my MSc Computer Science with Data Analytics. The HTML provides pages for exploring membership plans, events, the gym team, contact details and a registration form.

**Status: HTML source uploaded; supporting assets are still needed.** The current repository copy is incomplete and is not a verified working demo.

## Pages

| File | Purpose |
| --- | --- |
| [index.html](index.html) | Home page with membership and registration calls to action |
| [membership.html](membership.html) | Comparison table for Basic, Plus and Premium plans |
| [events.html](events.html) | Fitness events and partner locations |
| [register.html](register.html) | Registration form with membership selection and interests |
| [about_us.html](about_us.html) | Gym background and team |
| [contact.html](contact.html) | Example contact details |

## Features visible in the HTML

- Shared navigation and semantic `header`, `nav`, `main`, `aside` and `footer` elements.
- Skip-to-content links and descriptive logo alt text.
- Membership table with a caption and scoped header cells.
- Labelled form controls, required fields, email input and a telephone pattern.
- A live status region intended for registration feedback.
- Links to health and fitness resources with `rel="noopener"` for new tabs.

## Missing supporting files

All six pages reference the following files, which were not included in the upload:

- `css/main.css`
- `js/main.js`
- `img/logo.png`
- `vendor/jquery-3.7.1.min.js`
- `vendor/slicknav/slicknav.min.css`
- `vendor/slicknav/jquery.slicknav.min.js`

The supplied documentation describes responsive CSS, a mobile SlickNav menu, an automatically updated footer year and JavaScript form feedback. Those behaviours cannot be verified until the assets are added. The contact HTML currently contains example contact details but no map link, despite the documentation mentioning one.

## Viewing locally

After downloading the project, open `index.html` in a browser to inspect the HTML. It will lack the intended styles, logo and scripted behaviours until the supporting folders are restored.

Alternatively, run this from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. The registration form uses `action="#"`; no registration backend is included.

## Review and next steps

The six HTML files were reviewed and added without changes. Their local page navigation targets are present. Runtime behaviour, visual layout and responsive styling have not been tested in this incomplete copy.

Next steps are to restore the original asset folders, check mobile navigation and form feedback, and reconcile the documentation with the source. The supplied PDF was reviewed as project context; it has not been added to this folder.
