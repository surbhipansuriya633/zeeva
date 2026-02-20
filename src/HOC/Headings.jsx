import React from 'react'

function Headings(props) {
    return (
        <div>

            <div class="two my-2">
                <h1 className='twoh1'>{props.heading}
                    <span>{props.tagline}</span>
                </h1>
            </div>
        </div>
    )
}
function HeadingsDark(props) {
    return (
        <div>

            <div class="two my-2">
                <h1 className='twoh1'>{props.heading}
                    <span className='text-light'>{props.tagline}</span>
                </h1>
            </div>
        </div>
    )
}



function SmallHeadings(smprops) {
    return (
        <div class="five">
            <h1>{smprops.smheading}</h1>
        </div>
    )
}

export { Headings, SmallHeadings, HeadingsDark }