# FitFlex Gym Website

A six-page gym website assignment from my MSc Computer Science with Data Analytics. The HTML provides pages for exploring membership plans, events, the gym team, contact details and a registration form.

**Status: All six HTML pages and their referenced supporting assets are included.** Browser behaviour and visual layout still require verification.

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

## Supporting files

The original supporting files have been restored to the paths referenced by the HTML:

- `css/main.css`
- `js/main.js`
- `img/logo.png`
- `vendor/jquery-3.7.1.min.js`
- `vendor/slicknav/slicknav.min.css`
- `vendor/slicknav/jquery.slicknav.min.js`

The supplied documentation describes responsive CSS, a mobile SlickNav menu, an automatically updated footer year and JavaScript form feedback. The corresponding CSS and JavaScript are now present; browser-level behaviour has not yet been verified. The contact HTML currently contains example contact details but no map link, despite the documentation mentioning one.

## Viewing locally

After downloading the project, open `index.html` in a browser to inspect the HTML. The project includes the styles, logo, jQuery, SlickNav and site script.

Alternatively, run this from the project folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. The registration form uses `action="#"`; no registration backend is included.

## Review and next steps

The six HTML files were reviewed and added without changes. Their local page navigation targets are present. All referenced local assets are now included. Runtime behaviour, visual layout and responsive styling have not been tested in a browser.

Next steps are to check mobile navigation and form feedback and reconcile the documentation with the source. The supplied PDF was reviewed as project context; it has not been added to this folder.
