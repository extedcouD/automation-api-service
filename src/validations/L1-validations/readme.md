

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.message.intent.fulfillment.vehicle.category must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["search"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.intent.fulfillment.vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.intent.fulfillment.type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.intent.fulfillment.stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.intent.fulfillment.stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.intent.fulfillment.state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.intent.payment.tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_1**: every element of $.message.intent.tags[*].descriptor.code must be in ["PAGINATION"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_PAGINATION**: every element of $.list[*].descriptor.code must be in ["PAGINATION_ID", "REQUESTED_PAGE_NUMBER"]

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["select"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["init"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["confirm"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["status"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order_id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.descriptor.code must be present in the payload
	
	- **condition validate_attribute_17**: $.message.descriptor.name must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["cancel"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.descriptor.code must be in ["SOFT-CANCEL", "CONFIRM-CANCEL"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.descriptor.code must **not** be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.catalog.descriptor.name must be present in the payload
	
	- **condition validate_attribute_15**: $.message.catalog.providers[*].id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.catalog.providers[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_18**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	
	- **condition validate_attribute_19**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_20**: $.message.catalog.providers[*].categories[*].id must be present in the payload
	
	- **condition validate_attribute_21**: $.message.catalog.providers[*].categories[*].descriptor.code must be present in the payload
	
	- **condition validate_attribute_22**: $.message.catalog.providers[*].time.range.start must be present in the payload
	
	- **condition validate_attribute_23**: $.message.catalog.providers[*].time.range.end must be present in the payload
	
	- **condition validate_attribute_24**: $.message.catalog.providers[*].payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_search"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["SEATER", "SLEEPER", "SEMI_SLEEPER", "TICKET", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].categories[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].type must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.catalog.providers[*].items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_1**: every element of $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_1_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_1_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition validate_tag_2**: every element of $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition validate_tag_3**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SCHEDULED_INFO"]
	
		> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_3_SCHEDULED_INFO**: every element of $.list[*].descriptor.code must be in ["GTFS"]
	
	- **condition validate_tag_4**: every element of $.message.catalog.tags[*].descriptor.code must be in ["PAGINATION"]
	
		> Note: **Condition validate_tag_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_4_PAGINATION**: every element of $.list[*].descriptor.code must be in ["PAGINATION_ID", "CURRENT_PAGE_NUMBER", "MAX_PAGE_NUMBER"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_35**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_select"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition validate_attribute_35**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_37**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition validate_attribute_39**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition validate_attribute_40**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_init"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition validate_attribute_35**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.status must be present in the payload
	
	- **condition validate_attribute_39**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition validate_attribute_40**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition validate_attribute_41**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_attribute_43**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition validate_attribute_44**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition validate_attribute_45**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_46**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition validate_attribute_47**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition validate_attribute_48**: $.message.order.created_at must be present in the payload
	
	- **condition validate_attribute_49**: $.message.order.updated_at must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_confirm"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_enum_17**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	
		> Note: **Condition validate_enum_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.status must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.provider.descriptor.images[*].url must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_35**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_37**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_attribute_39**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_attribute_40**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_41**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition validate_attribute_43**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition validate_attribute_44**: $.message.order.cancellation.cancelled_by must be present in the payload
	
	- **condition validate_attribute_45**: $.message.order.cancellation.time must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_cancel"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_enum_17**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	
		> Note: **Condition validate_enum_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_attribute_35**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition validate_attribute_37**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_cancel"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_enum_17**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	
		> Note: **Condition validate_enum_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: $.context.location.country.code must be present in the payload
	
	- **condition validate_attribute_2**: $.context.location.city.code must be present in the payload
	
	- **condition validate_attribute_3**: $.context.domain must be present in the payload
	
	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_9**: $.context.action must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.status must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition validate_attribute_19**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition validate_attribute_20**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition validate_attribute_21**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition validate_attribute_28**: $.message.order.quote.price.value must be present in the payload
	
	- **condition validate_attribute_29**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition validate_attribute_30**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition validate_attribute_31**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_32**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_attribute_33**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_attribute_34**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_attribute_35**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition validate_attribute_36**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition validate_attribute_37**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition validate_attribute_38**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition validate_attribute_39**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition validate_attribute_40**: $.message.order.payments[*].params.virtual_payment_address must be present in the payload
	
	- **condition validate_attribute_42**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition validate_attribute_43**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition validate_attribute_44**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition validate_attribute_45**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition validate_attribute_46**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition validate_attribute_47**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition validate_attribute_48**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_49**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition validate_attribute_50**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition validate_attribute_51**: $.message.order.created_at must be present in the payload
	
	- **condition validate_attribute_52**: $.message.order.updated_at must be present in the payload
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_status"]
	
		> Note: **Condition validate_enum_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.action must **not** be present in the payload
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition validate_enum_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
		> Note: **Condition validate_enum_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_15** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_16** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_enum_17**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	
		> Note: **Condition validate_enum_17** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]