function importCandidate() {
    const name = document.getElementById('candidate-name').value;
    const url = document.getElementById('candidate-profile-url').value;
    const statusDiv = document.getElementById('status');
    const toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);

    const linkedInPrefix = "https://www.linkedin.com/in/";

    if (name && url) {
        if (url.startsWith(linkedInPrefix)) {
            statusDiv.textContent = `Candidate "${name}" imported successfully!`;
            statusDiv.className = 'status success';
            showToast('Candidate imported successfully!');
            document.getElementById('new-import-button').style.display = 'inline-block';
        } else {
            statusDiv.textContent = 'Error: Incorrect LinkedIn profile URL provided.';
            statusDiv.className = 'status error';
            showToast('Error: Invalid LinkedIn URL.');
        }
    } else {
        statusDiv.textContent = 'Error: Please fill out all fields.';
        statusDiv.className = 'status error';
        showToast('Error: All fields are required.');
    }

    statusDiv.style.display = 'block';
}

function resetForm() {
    
    document.getElementById('candidate-name').value = '';
    document.getElementById('candidate-profile-url').value = '';
    
    
    document.getElementById('new-import-button').style.display = 'none';
}


function showToast(message) {
    const toast = document.querySelector('.toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
