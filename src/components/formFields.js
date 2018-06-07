const formFields = [
	{ label: 'Name', name: 'name', placeholder: "What's your name?", fieldType: 'text', multiline: false },
	{ label: 'Reply Email', name: '_replyto', placeholder: 'Email to contact?', fieldType: 'email', multiline: false },
	{ label: 'Message', name: 'message', placeholder: 'How can I help you?', fieldType: 'text', multiline: true }
];
export default formFields;
