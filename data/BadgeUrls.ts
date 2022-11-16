const BadgeUrls: Record<string, string> = {
	java: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white',
	javafx: 'https://img.shields.io/badge/JavaFX-ED8B00?style=for-the-badge&logo=java&logoColor=white',
	gradle: 'https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white',
	derby: 'https://img.shields.io/badge/Derby-white?style=for-the-badge&logo=data:image/png;base64,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',
	'c#': 'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white',
	c: 'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',
	html: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
	css: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
	scss: 'https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
	git: 'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
	springboot: 'https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=spring boot&logoColor=white',
	thymeleaf:
		'https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white',
	python: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
	unity: 'https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white',
	javascript: 'https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
	typescript:
		'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
	jquery: 'https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white',
	sqlite: 'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white',
	react: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
	npm: 'https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white',
	tailwindcss:
		'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
	mongodb: 'https://img.shields.io/badge/mongodb-%2347A248.svg?&style=for-the-badge&logo=mongodb&logoColor=white',
	hartshorn:
		'https://img.shields.io/badge/Hartshorn-%FF00FF.svg?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAjaSURBVHhe3ZtriNxUFMd3ZjKZHbZbRFtEv+r6TRHFil9FVqj4QFkVFNEvfvKjIG61itYK1tYK+sEHPipS27FVwVbRQhUFa8XahyK0tWhp8dFuu9uZzUxuHuP/3JxkJ5lMJskmM9UfLOfk5ubce0/uPfeR2ZE02Lb9RBs0Df0viAlOHjgtQ7xA9dCE/n3aehRZxoYK0i3jEdJHFfViiCnSh4FhW0tIVsvqCsu275OJeSIbb4qPyesE9HMQQ+sBwjTXODWhuhip6pK0B0yppfLtrI80RPOHQqFwhC8HTrlU0lgdUUvKOJywMakTYjuADGPM38GXkqpSOcjqeUFFKa+ESDQkkzjg7mq5ch1fSnB9itVhUWsa4ijrElzflWYoREIGNdE6Aukx7BnAxbDMZ5waLYBZahXfzgZ32utEmMYavj1UUJUJ1GXeqZUDpsVfIbJ5OWQIb/83aZlpGfoZiKG/fRd3PRBgmm9HUmDZEzb0nHPlgG63plxSNkGdwv1iyxTLEQ9eGcSMgPImhGU+2B4ZUSolZQ5JNUpH2j7MBHJdQCAW7MP64N5F1YkKw9unVZaHaVktDIkNwXRcv8yP5QqKmnZKdEBDT1APwJpgKyd1EqsX9IQMOHZisbjCYoJy8FLk0rcvLcNYx4+lw7Kt1WwrEuR7C2JgMYHKghMOysIjQO/4EyJ9vc42z21zTIWDpfAszxADD4hUJhr4taxINOl6Jh6cQLSfcWx0g3tfQAx1JqDyEZOehiP+lpUKJ7UDusY/At0xvPW1UOneeTMNUl2oJ8IR31I9OyEHcbZk4NmwADiQQBcGyp6g8klyUhe4N4kN0WlID9ox8u1k4FkMATHrmHFAD9gDEVoBSj+jndtxen72l1550kL23PFOb5qTfVAe3HuD8gRI/9IauvYaG/HA2N8B0dVApHk9hmYPTs4EmPRsI/ofgPCVT9f466orE+mAyN3gmFr9g1WPiqKubJm6b9ojHZsj75wA3fAiVjMHq7urILwtL5Vtt9uPQ33YSVnAsKxtEHKlmAoyznN8FxQQIeSYZOlR17XX2UQmwKTP/rzQN3L6BJy93Un1ownxI8TihyIZMS1zk7QaAqLsO9gbbOZLSdbLYpj0OQCNnoOYRCP3Oyl+kE6LpOziEBnr1RPCyCEGYMtrNh3rDijDYNUHT4XZNd6FjCLKruKDkH5kPl3OaI0v2XZP4KQPIbJvfCdUQNNodS04XDAc6HR2krNnRtjJjwsa3kCPeBJqvo13oYKC474TigsQmVWGbGH68x3JuWC8d02LA4EK5SFxStYkABz0AcSiK0Y2MK5Dh51umvSNYvCN74QqgKhPU04XcML7EKkrSM/2arxl2wPdgkdCFcGy+TNZswA8eySuKD2jGeKwNNJByzBohyrXH5z1/IAqhPnZ+2wWINGsgPz05mm77QNpizvgCKHvoSjBhXZ+camFHTZSPmEZ69VS+VZOkqDie7GEvT/uASXFFuT17eIw3s9WFOX6XuVC9K1farABWodCPIRpNOr6PHXtrq5I12FndtQozhIJsoZG/LDnkUwLpGebhnHcyeWAa9oSZ9dTZpv1LY7pbnjsB53gW7oS7JS+lUKermfRSDrx9Z4lHUFwNRoaOgMx2S3GZrS5r9hoKJgKT0J4vYEkVzpI30o19NarnFeCuOL77E060j6VN6OJ5YBYH0dhrMpqKKOKeikEfTx5FHknaPyVS6X98mZCdMu8hlUJtrSb3fFMtlum8a5aUm6RNzMg6e8DJAh0e1kNQntyNxjVBJbFrEvQgMigSw0cV0ev5EvJmFqRZxJu40eV8g3yRgfCsv5hNTGxHIA3UGdVYrfb9EmaVoHHnZQF4JzH3F5QF81jnByXKfScMdY9yB6c+VJY403b3qKWSu/xZWJiOaBcVH5nVYIKrYCoVcuVm+CEn5xUB0yBS5H2EfJMLlWrV3CyBE5ps9qLsF6zDA6fDuv2uPemUizSJugsJ+UDpqCuz+NABhlImrboc7QPLIN3stpJ38A0o837tr1Y+f3Mqg/UiQ5A6TQKK0bDN+1idjgB0XfGiQ2MRU5rJHVT0ClNTxC56YS5b6Ww4KHvDpFQYISQjWdH+Fj0N8EgsElfiXY55heAE+iYXE5/PXqJB/JuYHORIGuXszvB/kA6nv542x1GdmsAFxilX2Jojn0/FAzruvYdnMApfrBYog1MrC5J+bCG6PlNEvv/wzOatgs9pc5JPoRp+RZNmUJnfU4xyaDewSZigUcQV8Q+5+n4cCxI1PhE64BiobjZbttv82US+kX/MC5gGYuWaX5TVZTYG67UkIfxN41uH+fTtATjfy9E7DeDvJFxoBNE/JOIBU9BTdXtY22Hw+AC6TdCBcO2xkzbGsd6YY5+vYkofTVk8AeLtMVdy3pPyG5wxYeVXgOLnecRYUq6ZV1IaZVS6UyxULCgZrv1zQI0ousNNg3xIt+OBFlDplwRawZJQ6q9QAxqeIt7WHd5AG3p202xtK2w6lEtl0+z+t8BkX+V8/58RM7PuE/ngEedrA54+4cgUo3vOOTVA2jdvzW4rkfjLmG1F1NVpXwZ65KKouQ6xvN0wBEEry18KUHQuifqbVq2rbLqgWdMVnMhNwcQS9SKbxeJyL4cIjg7SMgxcNidfCnBFHcIIv33/Rjk6gBQw5TYYl2C6XKU1SBTCHa+wxBMfdvznuJydQBVft4Qn/OlpK6La1ntS6lYFKzmRt49YGRcrRxgVbJEVW8MiwNYyvp+VoNrmvpy7f5E7g4IvkWsEGkI+OIAOQR/t/GlBPFgZ97dn8jdAaCGxvjOFEMWOzT+L2ddMq6qh1nNldwdwHFgN19KGkKnX3pFgufS7CATM4ge0BUHxsrqzZ1xANPdMlYl9B0QIvfxTwzEAUqx6JsKEQeqWPTQUnkSf9PFYvEhviURlv3JIMb/wKC3jd2g7wMm0esIDWR/pjds+NCiL5ph0I8ictv8DA1qFMb6btnKHgjTot8C/v8a70KNgxPWC9P0/Z8foQljCL/2Ghn5FynQG8SiGrrhAAAAAElFTkSuQmCC&color=89C4A8',
	express: 'https://img.shields.io/badge/express-%23000000.svg?&style=for-the-badge&logo=express&logoColor=white',
	nodejs: 'https://img.shields.io/badge/node.js-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white',
	rust: 'https://img.shields.io/badge/rust-%23000000.svg?&style=for-the-badge&logo=rust&logoColor=white',
	chakraui:
		'https://img.shields.io/badge/chakra%20ui-%23319795.svg?&style=for-the-badge&logo=chakra%20ui&logoColor=white',
	redux: 'https://img.shields.io/badge/redux-%23764ABC.svg?&style=for-the-badge&logo=redux&logoColor=white',
	nextjs: 'https://img.shields.io/badge/next.js-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white',
	firebase: 'https://img.shields.io/badge/firebase-%23FFCA28.svg?&style=for-the-badge&logo=firebase&logoColor=black',
};

export default BadgeUrls;
