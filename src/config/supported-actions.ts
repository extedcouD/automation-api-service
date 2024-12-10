export const supportedActions = {
	null: ["search"],
	search: ["on_search"],
	on_search: ["search", "select"],
	select: ["on_select"],
	on_select: ["init"],
	init: ["on_init"],
	on_init: ["confirm"],
	confirm: ["on_confirm"],
	on_confirm: ["status"],
	status: ["on_status"],
	on_status: [] as string[],
};

export const apiProperties = {
	search: {
		async_predecessor: null,
		transaction_partner: [],
	},
	on_search: {
		async_predecessor: "search",
		transaction_partner: ["search"],
	},
	select: {
		async_predecessor: null,
		transaction_partner: ["search", "on_search"],
	},
	on_select: {
		async_predecessor: "select",
		transaction_partner: ["search", "on_search", "select"],
	},
	init: {
		async_predecessor: null,
		transaction_partner: ["search", "on_search", "select", "on_select"],
	},
	on_init: {
		async_predecessor: "init",
		transaction_partner: ["search", "on_search", "select", "on_select", "init"],
	},
	confirm: {
		async_predecessor: null,
		transaction_partner: [
			"search",
			"on_search",
			"select",
			"on_select",
			"init",
			"on_init",
		],
	},
	on_confirm: {
		async_predecessor: "confirm",
		transaction_partner: [
			"search",
			"on_search",
			"select",
			"on_select",
			"init",
			"on_init",
			"confirm",
		],
	},
	status: {
		async_predecessor: null,
		transaction_partner: [
			"search",
			"on_search",
			"select",
			"on_select",
			"init",
			"on_init",
			"confirm",
			"on_confirm",
		],
	},
	on_status: {
		async_predecessor: "status",
		transaction_partner: [
			"search",
			"on_search",
			"select",
			"on_select",
			"init",
			"on_init",
			"confirm",
			"on_confirm",
			"status",
		],
	},
};
