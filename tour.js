function startTour() {
    const alreadySeen = localStorage.getItem('tourSeen');
    if (alreadySeen) {
        return; // If tour has already been seen, exit function
    }

    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            classes: 'shepherd-theme-custom', // Apply custom theme
            scrollTo: true // Enable auto-scrolling to the element
        }
    });

    tour.addStep({
        id: 'step-1',
        text: 'This section shows the available income.',
        attachTo: {
            element: '#step-1',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-2',
        text: 'This area displays the total income.',
        attachTo: {
            element: '#step-2',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-3',
        text: 'This area shows the total expenses.',
        attachTo: {
            element: '#step-3',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-8',
        text: 'Use this dropdown to select between income and expense.',
        attachTo: {
            element: '.options',
            on: 'top'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-9',
        text: 'Enter a description for the transaction here.',
        attachTo: {
            element: '.description.box',
            on: 'top'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-10',
        text: 'Enter the value of the transaction here.',
        attachTo: {
            element: '.amount.box',
            on: 'top'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-4',
        text: 'Use this section to enter new income or expenses.',
        attachTo: {
            element: '.enterdatasection',
            on: 'top'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-6',
        text: 'Click here to save the data you entered.',
        attachTo: {
            element: '#step-6',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                localStorage.setItem('tourSeen', true);
                classes: 'shepherd-button'
            },
            {
                text: 'Next',
                action: tour.next,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.addStep({
        id: 'step-7',
        text: 'Click here to view all data history.',
        attachTo: {
            element: '#step-7',
            on: 'bottom'
        },
        buttons: [
            {
                text: 'Quit',
                action: tour.cancel,
                classes: 'shepherd-button'
            },
            {
                text: 'Finish',
                action: tour.complete,
                classes: 'shepherd-button'
            }
        ]
    });

    tour.on('complete', function() {
        localStorage.setItem('tourSeen', true);
    });

    tour.start();
}

window.addEventListener('load', startTour);
