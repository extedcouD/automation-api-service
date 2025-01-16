import on_cancel from "../validations/L1-validations/api-tests/on_cancel";

export const supportedActions = {
	null: ["search", "select", "init"],
	search: ["on_search"],
	on_search: ["search", "select", "init"],
	select: ["on_select"],
	on_select: ["select", "init"],
	init: ["on_init"],
	on_init: ["init", "confirm"],
	confirm: ["on_confirm", "status"],
	on_confirm: ["confirm", "status", "cancel", "on_status"],
	status: ["on_status"],
	on_status: ["status", "cancel"],
	cancel: ["on_cancel", "status"],
	on_cancel: ["cancel", "status"] as string[],
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
		transaction_partner: [],
	},
	on_select: {
		async_predecessor: "select",
		transaction_partner: ["select"],
	},
	init: {
		async_predecessor: null,
		transaction_partner: [],
	},
	on_init: {
		async_predecessor: "init",
		transaction_partner: ["init"],
	},
	confirm: {
		async_predecessor: null,
		transaction_partner: [
			"init",
			"on_init",
		],
	},
	on_confirm: {
		async_predecessor: "confirm",
		transaction_partner: [
			"init",
			"on_init",
			"confirm",
		],
	},
	status: {
		async_predecessor: null,
		transaction_partner: [
			"init",
			"on_init",
			"confirm",
		],
	},
	on_status: {
		async_predecessor: "status",
		transaction_partner: [
			"init",
			"on_init",
			"confirm",
		],
	},
	cancel: {
		async_predecessor: null,
		transaction_partner: [
			"confirm",
		],
	},
	on_cancel: {
		async_predecessor: "cancel",
		transaction_partner: [
			"confirm",
		],
	},
};
