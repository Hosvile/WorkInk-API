import axios from "axios";

const options = {
	method: 'POST',
	url: 'https://dash-api.work.ink/v1/link',
	headers: {
		'X-Api-Key': '9ed2f68f-ed78-48a1-9b49-bf36064de79a',
		'Content-Type': 'application/json'
	},
	data: {
		title: 'Work Ink',
		link_description: 'Work Ink',
		destination: 'https://pandadevelopment.net/startkey.html?service=infinix',
		f_domain: 'workink.net',
		custom: 'meroow',
		youtube_video_id: 'https://youtu.be/6jV9kv8K72E?si=fNnCXe8Gdkx6wLPS'
	}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});