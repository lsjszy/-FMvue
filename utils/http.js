const baseUrl = "http://mazg.xyz:8082"

export function requestGet(url, data) {
	return new Promise((resolve, reject) => {
		var requestUrl = ""
		// #ifdef H5
		requestUrl = url;
		// #endif
		// #ifdef MP-WEIXIN
		requestUrl = baseUrl+url;
		// #endif
		uni.request({
			url: requestUrl,
			method: "GET",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}

export function requestPost(url, data) {
	return new Promise((resolve, reject) => {
		var requestUrl = ""
		// #ifdef H5
		requestUrl = url;
		// #endif
		// #ifdef MP-WEIXIN
		requestUrl = baseUrl+url;
		// #endif
		uni.request({
			url: requestUrl,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: "POST",
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}

