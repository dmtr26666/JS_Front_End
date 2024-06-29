function lockedProfile() {
    let profilesElements = document.querySelectorAll('.profile');
    console.log(profilesElements);

    for (const profile of profilesElements) {
        let showMoreBtn = profile.querySelector('button');
        console.log(showMoreBtn);
        let profileLock = profile.querySelector('input[type=radio][value=lock]');

        showMoreBtn.addEventListener('click', (e) => {
            console.log(profileLock.checked);
            if (!profileLock.checked) {
                if (showMoreBtn.textContent === 'Show more') {
                    e.currentTarget.previousElementSibling.style.display = 'block';
                    showMoreBtn.textContent = 'Hide it'
                } else {
                    e.currentTarget.previousElementSibling.style.display = 'none';
                    showMoreBtn.textContent = 'Show more';
                }
                     
            }
         
        });
    }
}