const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

// Button Event Handlers 
darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', "dark");
}
lightButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', "light");

}
solarButton.onclick = () => {

    if (body.classList.contains('solar')) {
        body.classList.remove('solar');

        solarButton.style.cssText = `
            --bg-solar: var(--yellow);
        `
        solarButton.innerText = "Solarize";

        localStorage.removeItem('isSolar');

    } else {
        solarButton.style.cssText = `
        --bg-solar : white; 
        `
        body.classList.add('solar');
        solarButton.innerText = 'Normalize';

        localStorage.setItem('isSolar', 'true');
    }

}


let main = document.getElementById('main');

main.innerHTML = `<h3>HEADING 1</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra. Non nisi est sit amet facilisis magna etiam. Lorem ipsum dolor sit amet consectetur
    adipiscing. Maecenas sed enim ut sem. A erat nam at lectus urna duis convallis convallis. Eu facilisis sed odio morbi quis commodo odio. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. In est ante in nibh mauris
    cursus mattis molestie.</p>

<p> Mi tempus imperdiet nulla malesuada pellentesque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Justo donec enim diam vulputate ut. Feugiat nibh sed pulvinar proin gravida. Fringilla ut morbi tincidunt augue interdum. Mattis
    pellentesque id nibh tortor id aliquet lectus proin. Ac odio tempor orci dapibus ultrices. Faucibus in ornare quam viverra orci sagittis eu. Et leo duis ut diam quam nulla porttitor massa. Nisl purus in mollis nunc sed id semper risus in.
    Amet mauris commodo quis imperdiet massa tincidunt. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Consequat nisl vel pretium lectus. Nisi lacus sed viverra tellus in hac. Feugiat in ante metus dictum at tempor commodo ullamcorper
    a. Gravida dictum fusce ut placerat.</p>

<p> Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Ut placerat orci nulla pellentesque. Tincidunt nunc pulvinar sapien et ligula ullamcorper. A diam sollicitudin tempor id eu. Tempus iaculis urna id volutpat. Cras pulvinar
    mattis nunc sed blandit libero volutpat. Nunc non blandit massa enim nec dui nunc mattis. Mollis aliquam ut porttitor leo. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sit amet commodo nulla facilisi nullam vehicula. Fringilla
    urna porttitor rhoncus dolor purus non enim. Lorem donec massa sapien faucibus et. Neque laoreet suspendisse interdum consectetur libero id.</p>

<h3>HEADING 2</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra. Non nisi est sit amet facilisis magna etiam. Lorem ipsum dolor sit amet consectetur
    adipiscing. Maecenas sed enim ut sem. A erat nam at lectus urna duis convallis convallis. Eu facilisis sed odio morbi quis commodo odio. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. In est ante in nibh mauris
    cursus mattis molestie.</p>

<p> Mi tempus imperdiet nulla malesuada pellentesque. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Justo donec enim diam vulputate ut. Feugiat nibh sed pulvinar proin gravida. Fringilla ut morbi tincidunt augue interdum. Mattis
    pellentesque id nibh tortor id aliquet lectus proin. Ac odio tempor orci dapibus ultrices. Faucibus in ornare quam viverra orci sagittis eu. Et leo duis ut diam quam nulla porttitor massa. Nisl purus in mollis nunc sed id semper risus in.
    Amet mauris commodo quis imperdiet massa tincidunt. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Consequat nisl vel pretium lectus. Nisi lacus sed viverra tellus in hac. Feugiat in ante metus dictum at tempor commodo ullamcorper
    a. Gravida dictum fusce ut placerat.</p>

<p> Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Ut placerat orci nulla pellentesque. Tincidunt nunc pulvinar sapien et ligula ullamcorper. A diam sollicitudin tempor id eu. Tempus iaculis urna id volutpat. Cras pulvinar
    mattis nunc sed blandit libero volutpat. Nunc non blandit massa enim nec dui nunc mattis. Mollis aliquam ut porttitor leo. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Sit amet commodo nulla facilisi nullam vehicula. Fringilla
    urna porttitor rhoncus dolor purus non enim. Lorem donec massa sapien faucibus et. Neque laoreet suspendisse interdum consectetur libero id.</p>
`