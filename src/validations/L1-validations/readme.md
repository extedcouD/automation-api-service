

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["search"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.intent.fulfillment.vehicle.category must be in ["BUS", "METRO"]
	  - **condition validate_enum_5.2**: $.message.intent.fulfillment.vehicle.category must be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.intent.fulfillment.type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].type must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.intent.fulfillment.stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.intent.fulfillment.stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.intent.payment.tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["select"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
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
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["init"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition validate_tag_0**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order.id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition validate_attribute_16**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition validate_attribute_17**: $.message.order.provider.id must be present in the payload
	
	- **condition validate_attribute_18**: $.message.order.payments[*].id must be present in the payload
	
	- **condition validate_attribute_22**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition validate_attribute_23**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition validate_attribute_24**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition validate_attribute_25**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition validate_attribute_26**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition validate_attribute_27**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["confirm"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_11**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_11.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition validate_enum_11.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition validate_enum_12**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_12.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition validate_enum_12.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition validate_enum_13**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_13.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition validate_enum_13.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["status"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.order_id must be present in the payload
	
	- **condition validate_attribute_15**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition validate_attribute_17**: $.message.descriptor.name must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["cancel"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_5.1**: every element of $.message.descriptor.code must be in ["SOFT-CANCEL", "CONFIRM-CANCEL"]
	  - **condition validate_enum_5.2**: $.message.descriptor.code must be present in the payload

- **update** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_attribute_14**: $.message.update_target must be present in the payload
	
	- **condition validate_attribute_15**: $.message.order.id must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["update"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition validate_enum_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition validate_enum_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition validate_enum_11**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition validate_enum_12**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition validate_enum_13** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition validate_enum_14**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_search"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **on_search_Message_TESTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition validate_attribute_14**: $.message.catalog.descriptor.name must be present in the payload
		
		- **condition validate_attribute_15**: $.message.catalog.providers[*].id must be present in the payload
		
		- **condition validate_attribute_16**: $.message.catalog.providers[*].descriptor.name must be present in the payload
		
		- **condition validate_attribute_17**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_20**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.gps must be present in the payload
		
		- **condition validate_attribute_21**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_23**: $.message.catalog.providers[*].categories[*].id must be present in the payload
		
		- **condition validate_attribute_25**: $.message.catalog.providers[*].time.range.start must be present in the payload
		
		- **condition validate_attribute_26**: $.message.catalog.providers[*].time.range.end must be present in the payload
		
		- **condition validate_enum_5**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_5.1**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["TICKET", "PASS"]
		  - **condition validate_enum_5.2**: $.message.catalog.providers[*].categories[*].descriptor.code must be present in the payload
		
		- **condition validate_enum_6**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
		
			> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_enum_7**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_7.1**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
		  - **condition validate_enum_7.2**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload
		
		- **condition validate_enum_8**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_8.1**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["ROUTE", "TRIP"]
		  - **condition validate_enum_8.2**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
		
		- **condition validate_enum_9**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
		
			> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].fulfillments[*].type must **not** be present in the payload
		
		- **condition validate_enum_10**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["QR"]
		
			> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must **not** be present in the payload
		
		- **condition validate_enum_11**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
		
			> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must **not** be present in the payload
		
		- **condition validate_enum_12**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]
		
			> Note: **Condition validate_enum_12** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].payments[*].status must **not** be present in the payload
		
		- **condition validate_enum_13**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_13.1**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]
		  - **condition validate_enum_13.2**: $.message.catalog.providers[*].payments[*].collected_by must be present in the payload
		
		- **condition validate_enum_14**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		
			> Note: **Condition validate_enum_14** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].payments[*].type must **not** be present in the payload
		
		- **condition validate_tag_0**: every element of $.message.catalog.providers[*].items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
		
			> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].items[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_0_FARE_POLICY**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
		
		- **condition validate_tag_1**: every element of $.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
		
			> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_1_ROUTE_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
		
		- **condition validate_tag_1_TICKET_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
		
		- **condition validate_tag_1_TRIP_DETAILS**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
		
		- **condition validate_tag_2**: every element of $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
		
			> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
		
		- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
		
		- **condition validate_tag_3**: every element of $.message.catalog.providers[*].tags[*].descriptor.code must be in ["SCHEDULED_INFO"]
		
			> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.catalog.providers[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_3_SCHEDULED_INFO**: every element of $.message.catalog.providers[*].tags[?(@.descriptor.code=='SCHEDULED_INFO')].list[*].descriptor.code must be in ["GTFS"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_select"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **on_select_Message_TESTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
		
		- **condition validate_attribute_16**: $.message.order.items[*].price.currency must be present in the payload
		
		- **condition validate_attribute_17**: $.message.order.items[*].price.value must be present in the payload
		
		- **condition validate_attribute_18**: $.message.order.items[*].quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
		
		- **condition validate_attribute_20**: $.message.order.items[*].time.label must be present in the payload
		
		- **condition validate_attribute_21**: $.message.order.items[*].time.duration must be present in the payload
		
		- **condition validate_attribute_22**: $.message.order.provider.id must be present in the payload
		
		- **condition validate_attribute_23**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition validate_attribute_24**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_26**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
		
		- **condition validate_attribute_27**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_29**: $.message.order.quote.price.value must be present in the payload
		
		- **condition validate_attribute_30**: $.message.order.quote.price.currency must be present in the payload
		
		- **condition validate_attribute_32**: $.message.order.quote.breakup[*].item.id must be present in the payload
		
		- **condition validate_attribute_33**: $.message.order.items[*].category_ids[*] must be present in the payload
		
		- **condition validate_attribute_34**: $.message.order.provider.time.range.start must be present in the payload
		
		- **condition validate_attribute_35**: $.message.order.provider.time.range.end must be present in the payload
		
		- **condition validate_attribute_37**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
		
		- **condition validate_attribute_38**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
		
		- **condition validate_attribute_39**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_40**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
		- **condition validate_attribute_41**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
		- **condition validate_enum_5**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
		  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
		
		- **condition validate_enum_6**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
		  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
		
		- **condition validate_enum_7**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_7.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
		  - **condition validate_enum_7.2**: $.message.order.fulfillments[*].type must be present in the payload
		
		- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
		
			> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
		
		- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
		
			> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
		
		- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
		
			> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
		
		- **condition validate_enum_11**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
		
			> Note: **Condition validate_enum_11** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.status must **not** be present in the payload
		
		- **condition validate_enum_12**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_12.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
		  - **condition validate_enum_12.2**: $.message.order.quote.breakup[*].title must be present in the payload
		
		- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
		
			> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
		
		- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
		
		- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
		
		- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
		
			> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_init"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **on_init_Message_TESTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition validate_attribute_14**: $.message.order.items[*].id must be present in the payload
		
		- **condition validate_attribute_16**: $.message.order.items[*].price.currency must be present in the payload
		
		- **condition validate_attribute_17**: $.message.order.items[*].price.value must be present in the payload
		
		- **condition validate_attribute_18**: $.message.order.items[*].quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_19**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
		
		- **condition validate_attribute_20**: $.message.order.items[*].time.label must be present in the payload
		
		- **condition validate_attribute_21**: $.message.order.items[*].time.duration must be present in the payload
		
		- **condition validate_attribute_22**: $.message.order.provider.id must be present in the payload
		
		- **condition validate_attribute_23**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition validate_attribute_24**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_26**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
		
		- **condition validate_attribute_27**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_29**: $.message.order.quote.price.value must be present in the payload
		
		- **condition validate_attribute_30**: $.message.order.quote.price.currency must be present in the payload
		
		- **condition validate_attribute_32**: $.message.order.quote.breakup[*].item.id must be present in the payload
		
		- **condition validate_attribute_33**: $.message.order.payments[*].id must be present in the payload
		
		- **condition validate_attribute_37**: $.message.order.items[*].category_ids[*] must be present in the payload
		
		- **condition validate_attribute_38**: $.message.order.provider.time.range.start must be present in the payload
		
		- **condition validate_attribute_39**: $.message.order.provider.time.range.end must be present in the payload
		
		- **condition validate_attribute_41**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_42**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
		
		- **condition validate_attribute_43**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
		
		- **condition validate_attribute_44**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
		- **condition validate_attribute_45**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
		- **condition validate_enum_5**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
		  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
		
		- **condition validate_enum_6**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
		  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
		
		- **condition validate_enum_7**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_7.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
		  - **condition validate_enum_7.2**: $.message.order.fulfillments[*].type must be present in the payload
		
		- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
		
			> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
		
		- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
		
			> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
		
		- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
		
			> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
		
		- **condition validate_enum_11**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_11.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
		  - **condition validate_enum_11.2**: $.message.order.payments[*].status must be present in the payload
		
		- **condition validate_enum_12**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_12.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
		  - **condition validate_enum_12.2**: $.message.order.payments[*].collected_by must be present in the payload
		
		- **condition validate_enum_13**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_13.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		  - **condition validate_enum_13.2**: $.message.order.payments[*].type must be present in the payload
		
		- **condition validate_enum_14**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_14.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
		  - **condition validate_enum_14.2**: $.message.order.quote.breakup[*].title must be present in the payload
		
		- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
		
			> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
		
		- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
		
		- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
		
		- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
		
			> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
		
		- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
		
			> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
		
		- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_confirm"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **on_confirm_Message_TESTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition validate_attribute_14**: $.message.order.id must be present in the payload
		
		- **condition validate_attribute_15**: $.message.order.items[*].id must be present in the payload
		
		- **condition validate_attribute_16**: $.message.order.items[*].descriptor.name must be present in the payload
		
		- **condition validate_attribute_18**: $.message.order.items[*].price.currency must be present in the payload
		
		- **condition validate_attribute_19**: $.message.order.items[*].price.value must be present in the payload
		
		- **condition validate_attribute_20**: $.message.order.items[*].quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_21**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
		
		- **condition validate_attribute_22**: $.message.order.items[*].time.label must be present in the payload
		
		- **condition validate_attribute_23**: $.message.order.items[*].time.duration must be present in the payload
		
		- **condition validate_attribute_24**: $.message.order.provider.id must be present in the payload
		
		- **condition validate_attribute_25**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition validate_attribute_26**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_28**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
		
		- **condition validate_attribute_29**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_31**: $.message.order.quote.price.value must be present in the payload
		
		- **condition validate_attribute_32**: $.message.order.quote.price.currency must be present in the payload
		
		- **condition validate_attribute_34**: $.message.order.quote.breakup[*].item.id must be present in the payload
		
		- **condition validate_attribute_35**: $.message.order.payments[*].id must be present in the payload
		
		- **condition validate_attribute_39**: $.message.order.payments[*].params.transaction_id must be present in the payload
		
		- **condition validate_attribute_40**: $.message.order.payments[*].params.currency must be present in the payload
		
		- **condition validate_attribute_41**: $.message.order.payments[*].params.amount must be present in the payload
		
		- **condition validate_attribute_42**: $.message.order.cancellation_terms[*].cancel_by.duration must be present in the payload
		
		- **condition validate_attribute_43**: $.message.order.status must be present in the payload
		
		- **condition validate_attribute_44**: $.message.order.items[*].category_ids[*] must be present in the payload
		
		- **condition validate_attribute_45**: $.message.order.provider.time.range.start must be present in the payload
		
		- **condition validate_attribute_46**: $.message.order.provider.time.range.end must be present in the payload
		
		- **condition validate_attribute_48**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
		
		- **condition validate_attribute_49**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
		
		- **condition validate_attribute_50**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_51**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
		- **condition validate_attribute_52**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
		- **condition validate_attribute_53**: $.message.order.created_at must be present in the payload
		
		- **condition validate_attribute_54**: $.message.order.updated_at must be present in the payload
		
		- **condition validate_enum_5**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
		  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
		
		- **condition validate_enum_6**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
		  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
		
		- **condition validate_enum_7**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_7.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
		  - **condition validate_enum_7.2**: $.message.order.fulfillments[*].type must be present in the payload
		
		- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
		
			> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
		
		- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
		
			> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
		
		- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
		
			> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
		
		- **condition validate_enum_11**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_11.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
		  - **condition validate_enum_11.2**: $.message.order.payments[*].status must be present in the payload
		
		- **condition validate_enum_12**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_12.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
		  - **condition validate_enum_12.2**: $.message.order.payments[*].collected_by must be present in the payload
		
		- **condition validate_enum_13**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_13.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		  - **condition validate_enum_13.2**: $.message.order.payments[*].type must be present in the payload
		
		- **condition validate_enum_14**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_14.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
		  - **condition validate_enum_14.2**: $.message.order.quote.breakup[*].title must be present in the payload
		
		- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
		
			> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
		
		- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
		
		- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
		
		- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
		
			> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
		
		- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
		
			> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
		
		- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **on_cancel_Message_TESTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition validate_attribute_14**: $.message.order.id must be present in the payload
		
		- **condition validate_attribute_15**: $.message.order.status must be present in the payload
		
		- **condition validate_attribute_16**: $.message.order.items[*].id must be present in the payload
		
		- **condition validate_attribute_17**: $.message.order.items[*].descriptor.name must be present in the payload
		
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
		
		- **condition validate_attribute_33**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_35**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
		
		- **condition validate_attribute_37**: $.message.order.quote.price.value must be present in the payload
		
		- **condition validate_attribute_38**: $.message.order.quote.price.currency must be present in the payload
		
		- **condition validate_attribute_40**: $.message.order.payments[*].id must be present in the payload
		
		- **condition validate_attribute_44**: $.message.order.payments[*].params.bank_code must be present in the payload
		
		- **condition validate_attribute_45**: $.message.order.payments[*].params.bank_account_number must be present in the payload
		
		- **condition validate_attribute_46**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
		- **condition validate_attribute_47**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
		- **condition validate_attribute_48**: $.message.order.cancellation.cancelled_by must be present in the payload
		
		- **condition validate_attribute_49**: $.message.order.cancellation.time must be present in the payload
		
		- **condition validate_enum_5**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
		  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
		
		- **condition validate_enum_6**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
		  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
		
		- **condition validate_enum_7**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_7.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
		  - **condition validate_enum_7.2**: $.message.order.fulfillments[*].type must be present in the payload
		
		- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
		
			> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
		
		- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
		
			> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
		
		- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
		
			> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
		
		- **condition validate_enum_11**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_11.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
		  - **condition validate_enum_11.2**: $.message.order.payments[*].status must be present in the payload
		
		- **condition validate_enum_12**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_12.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
		  - **condition validate_enum_12.2**: $.message.order.payments[*].collected_by must be present in the payload
		
		- **condition validate_enum_13**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_13.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		  - **condition validate_enum_13.2**: $.message.order.payments[*].type must be present in the payload
		
		- **condition validate_enum_14**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_14.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
		  - **condition validate_enum_14.2**: $.message.order.quote.breakup[*].title must be present in the payload
		
		- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
		
			> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
		
		- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
		
		- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
		
		- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
		
			> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
		
		- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
		
			> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
		
		- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **on_update_Message_TESTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition validate_attribute_14**: $.message.order.id must be present in the payload
		
		- **condition validate_attribute_15**: $.message.order.items[*].id must be present in the payload
		
		- **condition validate_attribute_16**: $.message.order.items[*].descriptor.name must be present in the payload
		
		- **condition validate_attribute_18**: $.message.order.items[*].price.currency must be present in the payload
		
		- **condition validate_attribute_19**: $.message.order.items[*].price.value must be present in the payload
		
		- **condition validate_attribute_20**: $.message.order.items[*].quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_21**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
		
		- **condition validate_attribute_22**: $.message.order.items[*].time.label must be present in the payload
		
		- **condition validate_attribute_23**: $.message.order.items[*].time.duration must be present in the payload
		
		- **condition validate_attribute_24**: $.message.order.provider.id must be present in the payload
		
		- **condition validate_attribute_25**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition validate_attribute_26**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_28**: $.message.order.fulfillments[*].stops[*].instructions.name must be present in the payload
		
		- **condition validate_attribute_29**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload
		
		- **condition validate_attribute_30**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload
		
		- **condition validate_attribute_31**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
		
		- **condition validate_attribute_33**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
		
		- **condition validate_attribute_34**: $.message.order.fulfillments[*].stops[*].authorization.valid_to must be present in the payload
		
		- **condition validate_attribute_35**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_37**: $.message.order.quote.price.value must be present in the payload
		
		- **condition validate_attribute_38**: $.message.order.quote.price.currency must be present in the payload
		
		- **condition validate_attribute_40**: $.message.order.quote.breakup[*].item.id must be present in the payload
		
		- **condition validate_attribute_41**: $.message.order.quote.breakup[*].price.currency must be present in the payload
		
		- **condition validate_attribute_42**: $.message.order.quote.breakup[*].price.value must be present in the payload
		
		- **condition validate_attribute_43**: $.message.order.payments[*].id must be present in the payload
		
		- **condition validate_attribute_47**: $.message.order.payments[*].params.transaction_id must be present in the payload
		
		- **condition validate_attribute_48**: $.message.order.payments[*].params.currency must be present in the payload
		
		- **condition validate_attribute_49**: $.message.order.payments[*].params.amount must be present in the payload
		
		- **condition validate_attribute_50**: $.message.order.cancellation_terms[*].cancel_by.duration must be present in the payload
		
		- **condition validate_enum_5**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
		  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
		
		- **condition validate_enum_6**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_6.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
		  - **condition validate_enum_6.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
		
		- **condition validate_enum_7**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_7.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
		  - **condition validate_enum_7.2**: $.message.order.fulfillments[*].type must be present in the payload
		
		- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
		
			> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
		
		- **condition validate_enum_9**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_9.1**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
		  - **condition validate_enum_9.2**: $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload
		
		- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
		
			> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
		
		- **condition validate_enum_11**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_11.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
		  - **condition validate_enum_11.2**: $.message.order.payments[*].status must be present in the payload
		
		- **condition validate_enum_12**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_12.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
		  - **condition validate_enum_12.2**: $.message.order.payments[*].collected_by must be present in the payload
		
		- **condition validate_enum_13**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_13.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		  - **condition validate_enum_13.2**: $.message.order.payments[*].type must be present in the payload
		
		- **condition validate_enum_14**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_14.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
		  - **condition validate_enum_14.2**: $.message.order.quote.breakup[*].title must be present in the payload
		
		- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
		
			> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
		
		- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
		
		- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
		
		- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
		
			> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_4**: $.context.timestamp must be present in the payload
	
	- **condition validate_attribute_5**: $.context.bap_id must be present in the payload
	
	- **condition validate_attribute_6**: $.context.transaction_id must be present in the payload
	
	- **condition validate_attribute_7**: $.context.message_id must be present in the payload
	
	- **condition validate_attribute_8**: $.context.version must be present in the payload
	
	- **condition validate_attribute_10**: $.context.bap_uri must be present in the payload
	
	- **condition validate_attribute_11**: $.context.ttl must be present in the payload
	
	- **condition validate_attribute_12**: $.context.bpp_id must be present in the payload
	
	- **condition validate_attribute_13**: $.context.bpp_uri must be present in the payload
	
	- **condition validate_enum_1**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_1.1**: every element of $.context.action must be in ["on_status"]
	  - **condition validate_enum_1.2**: $.context.action must be present in the payload
	
	- **condition validate_enum_2**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_2.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition validate_enum_2.2**: $.context.location.country.code must be present in the payload
	
	- **condition validate_enum_3**: $.context.location.city.code must be present in the payload
	
	- **condition validate_enum_4**: all of the following sub conditions must be met:
	
	  - **condition validate_enum_4.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition validate_enum_4.2**: $.context.domain must be present in the payload
	
	- **on_status_Message_TESTS** : All the following sub conditions must pass as per the api requirement
	
		- **condition validate_attribute_14**: $.message.order.id must be present in the payload
		
		- **condition validate_attribute_15**: $.message.order.status must be present in the payload
		
		- **condition validate_attribute_16**: $.message.order.items[*].id must be present in the payload
		
		- **condition validate_attribute_17**: $.message.order.items[*].descriptor.name must be present in the payload
		
		- **condition validate_attribute_19**: $.message.order.items[*].price.currency must be present in the payload
		
		- **condition validate_attribute_20**: $.message.order.items[*].price.value must be present in the payload
		
		- **condition validate_attribute_21**: $.message.order.items[*].quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_22**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
		
		- **condition validate_attribute_23**: $.message.order.items[*].time.label must be present in the payload
		
		- **condition validate_attribute_24**: $.message.order.items[*].time.duration must be present in the payload
		
		- **condition validate_attribute_25**: $.message.order.provider.id must be present in the payload
		
		- **condition validate_attribute_26**: $.message.order.provider.descriptor.name must be present in the payload
		
		- **condition validate_attribute_27**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_29**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
		
		- **condition validate_attribute_30**: $.message.order.fulfillments[*].id must be present in the payload
		
		- **condition validate_attribute_31**: $.message.order.quote.price.value must be present in the payload
		
		- **condition validate_attribute_32**: $.message.order.quote.price.currency must be present in the payload
		
		- **condition validate_attribute_34**: $.message.order.quote.breakup[*].item.id must be present in the payload
		
		- **condition validate_attribute_35**: $.message.order.payments[*].id must be present in the payload
		
		- **condition validate_attribute_39**: $.message.order.payments[*].params.transaction_id must be present in the payload
		
		- **condition validate_attribute_40**: $.message.order.payments[*].params.currency must be present in the payload
		
		- **condition validate_attribute_41**: $.message.order.payments[*].params.amount must be present in the payload
		
		- **condition validate_attribute_42**: $.message.order.cancellation_terms[*].cancel_by.duration must be present in the payload
		
		- **condition validate_attribute_43**: $.message.order.items[*].category_ids[*] must be present in the payload
		
		- **condition validate_attribute_44**: $.message.order.provider.time.range.start must be present in the payload
		
		- **condition validate_attribute_45**: $.message.order.provider.time.range.end must be present in the payload
		
		- **condition validate_attribute_47**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
		
		- **condition validate_attribute_48**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
		
		- **condition validate_attribute_49**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
		
		- **condition validate_attribute_50**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
		
		- **condition validate_attribute_51**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
		
		- **condition validate_attribute_52**: $.message.order.created_at must be present in the payload
		
		- **condition validate_attribute_53**: $.message.order.updated_at must be present in the payload
		
		- **condition validate_enum_5**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_5.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
		  - **condition validate_enum_5.2**: $.message.order.items[*].descriptor.code must be present in the payload
		
		- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
		
			> Note: **Condition validate_enum_6** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
		
		- **condition validate_enum_7**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_7.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
		  - **condition validate_enum_7.2**: $.message.order.fulfillments[*].type must be present in the payload
		
		- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
		
			> Note: **Condition validate_enum_8** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
		
		- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
		
			> Note: **Condition validate_enum_9** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
		
		- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
		
			> Note: **Condition validate_enum_10** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
		
		- **condition validate_enum_11**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_11.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
		  - **condition validate_enum_11.2**: $.message.order.payments[*].status must be present in the payload
		
		- **condition validate_enum_12**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_12.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
		  - **condition validate_enum_12.2**: $.message.order.payments[*].collected_by must be present in the payload
		
		- **condition validate_enum_13**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_13.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
		  - **condition validate_enum_13.2**: $.message.order.payments[*].type must be present in the payload
		
		- **condition validate_enum_14**: all of the following sub conditions must be met:
		
		  - **condition validate_enum_14.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
		  - **condition validate_enum_14.2**: $.message.order.quote.breakup[*].title must be present in the payload
		
		- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].tags[*].descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS"]
		
			> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.fulfillments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_0_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
		
		- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
		
		- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
		
		- **condition validate_tag_1**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
		
			> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
		
		- **condition validate_tag_2**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
		
			> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:
			>
			> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
		
		- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_TYPE", "BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
		
		- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]