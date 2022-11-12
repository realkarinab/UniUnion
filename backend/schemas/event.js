export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'datetime',
            title: 'Datetime',
            type: 'datetime'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userID',
            title: 'UserID',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'postedBy',
            type: 'postedBy'
        },
        {
            name: 'rsvp',
            title: 'Rsvp',
            type: 'array',
            of: [{type: 'rsvp'}]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{type: 'comment'}]
        },



    ]
}