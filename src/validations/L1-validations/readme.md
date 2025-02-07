

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["search"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_FULFILLMENT_VEHICLE_CATEGORY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_FULFILLMENT_VEHICLE_CATEGORY.1**: every element of $.message.intent.fulfillment.vehicle.category must be in ["BUS", "METRO"]
	  - **condition Enum_Required_FULFILLMENT_VEHICLE_CATEGORY.2**: $.message.intent.fulfillment.vehicle.category must be present in the payload
	
	- **condition Enum_Required_INTENT_FULFILLMENT_TYPE**: every element of $.message.intent.fulfillment.type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition Enum_Required_INTENT_FULFILLMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.intent.fulfillment.stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.intent.fulfillment.stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.status must **not** be present in the payload
	
	- **condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.intent.payment.tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition PAGINATION_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.intent.tags[*].descriptor.code must be in ["PAGINATION"]
	
		> Note: **Condition PAGINATION_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_PAGINATION**: every element of $.message.intent.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["PAGINATION_ID", "REQUESTED_PAGE_NUMBER"]

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["select"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Enum_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition Enum_Required_ORDER_FULFILLMENTS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_MESSAGE_ORDER_STATUS**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition Enum_Required_MESSAGE_ORDER_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition Enum_Required_QUOTE_BREAKUP_TITLE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_COLLECTED_BY**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_STATUS**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_TYPE**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["init"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Enum_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition Enum_Required_ORDER_FULFILLMENTS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_MESSAGE_ORDER_STATUS**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition Enum_Required_MESSAGE_ORDER_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition Enum_Required_QUOTE_BREAKUP_TITLE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_0_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_ID**: $.message.order.id must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_TRANSACTION_ID**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_CURRENCY**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_AMOUNT**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["confirm"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Enum_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition Enum_Required_ORDER_FULFILLMENTS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_STATUS**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition Enum_Required_QUOTE_BREAKUP_TITLE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["status"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required__MESSAGE_ORDER_ID**: $.message.order_id must be present in the payload
	
	- **condition Attri_Required__MESSAGE_CANCELLATION_REASON_ID**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition Attri_Required_MESSAGE_DESCRIPTOR_NAME**: $.message.descriptor.name must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["cancel"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_MESSAGE_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_MESSAGE_DESCRIPTOR_CODE.1**: every element of $.message.descriptor.code must be in ["SOFT-CANCEL", "CONFIRM-CANCEL"]
	  - **condition Enum_Required_MESSAGE_DESCRIPTOR_CODE.2**: $.message.descriptor.code must be present in the payload

- **update** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required__MESSAGE_UPDATE_TARGET**: $.message.update_target must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_ID**: $.message.order.id must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["update"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Enum_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	
		> Note: **Condition Enum_Required_ORDER_FULFILLMENTS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_STATUS**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition Enum_Required_ORDER_PAYMENTS_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
		> Note: **Condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].collected_by must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_TYPE**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition Enum_Required_ORDER_PAYMENTS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].type must **not** be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition Enum_Required_QUOTE_BREAKUP_TITLE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_CATALOG_PROVIDERS_ID**: $.message.catalog.providers[*].id must be present in the payload
	
	- **condition Attri_Required_PROVIDERS_DESCRIPTOR_NAME**: $.message.catalog.providers[*].descriptor.name must be present in the payload
	
	- **condition Attri_Required_PROVIDERS_FULFILLMENTS_ID**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
	- **condition Attri_Required_STOPS_LOCATION_GPS**: $.message.catalog.providers[*].fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition Attri_Required_PROVIDERS_CATEGORIES_ID**: $.message.catalog.providers[*].categories[*].id must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_START**: $.message.catalog.providers[*].time.range.start must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_END**: $.message.catalog.providers[*].time.range.end must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["on_search"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_CATEGORIES_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_CATEGORIES_DESCRIPTOR_CODE.1**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["TICKET", "PASS"]
	  - **condition Enum_Required_CATEGORIES_DESCRIPTOR_CODE.2**: $.message.catalog.providers[*].categories[*].descriptor.code must be present in the payload
	
	- **condition Enum_Required_PROVIDERS_DESCRIPTOR_CODE**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Enum_Required_PROVIDERS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.1**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.2**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must be present in the payload
	
	- **condition Enum_Required_PROVIDERS_FULFILLMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_PROVIDERS_FULFILLMENTS_TYPE.1**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["ROUTE", "TRIP"]
	  - **condition Enum_Required_PROVIDERS_FULFILLMENTS_TYPE.2**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOP_TYPE**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOP_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_PROVIDERS_PAYMENTS_STATUS**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition Enum_Required_PROVIDERS_PAYMENTS_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].status must **not** be present in the payload
	
	- **condition Enum_Required_PROVIDERS_PAYMENTS_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_PROVIDERS_PAYMENTS_COLLECTED_BY.1**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Enum_Required_PROVIDERS_PAYMENTS_COLLECTED_BY.2**: $.message.catalog.providers[*].payments[*].collected_by must be present in the payload
	
	- **condition Enum_Required_PROVIDERS_PAYMENTS_TYPE**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition Enum_Required_PROVIDERS_PAYMENTS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].type must **not** be present in the payload
	
	- **condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.catalog.providers[*].items[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_FARE_POLICY**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_ROUTE_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition validate_tag_1_TICKET_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_1_TRIP_DETAILS**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_1_INFO**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition SCHEDULED_INFO_Tag_Required_PROVIDERS_DESCRIPTOR_CODE**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SCHEDULED_INFO"]
	
		> Note: **Condition SCHEDULED_INFO_Tag_Required_PROVIDERS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_3_SCHEDULED_INFO**: every element of $.message.catalog.providers[*].tags[?(@.descriptor.code=='SCHEDULED_INFO')].list[*].descriptor.code must be in ["GTFS"]
	
	- **condition PAGINATION_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.catalog.tags[*].descriptor.code must be in ["PAGINATION"]
	
		> Note: **Condition PAGINATION_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_4_PAGINATION**: every element of $.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["PAGINATION_ID", "CURRENT_PAGE_NUMBER", "MAX_PAGE_NUMBER"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_VALUE**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_FULFILLMENT_IDS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Attri_Required_STOPS_LOCATION_GPS**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition Attri_Required_ORDER_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Attri_Required_BREAKUP_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_CATEGORY_IDS**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_START**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_END**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_MIMETYPE**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["on_select"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_MESSAGE_ORDER_STATUS**: every element of $.message.order.status must be in ["SOFT_CANCEL", "CONFIRM_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED"]
	
		> Note: **Condition Enum_Required_MESSAGE_ORDER_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_VALUE**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_FULFILLMENT_IDS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Attri_Required_STOPS_LOCATION_GPS**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition Attri_Required_ORDER_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Attri_Required_BREAKUP_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_CATEGORY_IDS**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_START**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_END**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT_2**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_MIMETYPE**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["on_init"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_STATUS**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_ID**: $.message.order.id must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_ITEMS_DESCRIPTOR_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_VALUE**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_FULFILLMENT_IDS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Attri_Required_STOPS_LOCATION_GPS**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition Attri_Required_ORDER_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Attri_Required_BREAKUP_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_TRANSACTION_ID**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_CURRENCY**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_AMOUNT**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_CANCEL_BY_DURATION**: $.message.order.cancellation_terms[*].cancel_by.duration must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_STATUS**: $.message.order.status must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_CATEGORY_IDS**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_START**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_END**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT_2**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_MIMETYPE**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_CREATED_AT**: $.message.order.created_at must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_UPDATED_AT**: $.message.order.updated_at must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["on_confirm"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_STATUS**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_ID**: $.message.order.id must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_STATUS**: $.message.order.status must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_ITEMS_DESCRIPTOR_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_VALUE**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_FULFILLMENT_IDS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_CATEGORY_IDS**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Attri_Required_DESCRIPTOR_IMAGES_URL**: $.message.order.provider.descriptor.images[*].url must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_START**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_END**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Attri_Required_ORDER_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Attri_Required_STOPS_LOCATION_GPS**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_BANK_CODE**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_BANK_ACCOUNT_NUMBER**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_MIMETYPE**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Attri_Required_ORDER_CANCELLATION_CANCELLED_BY**: $.message.order.cancellation.cancelled_by must be present in the payload
	
	- **condition Attri_Required_ORDER_CANCELLATION_TIME**: $.message.order.cancellation.time must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_STATUS**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_ID**: $.message.order.id must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_ITEMS_DESCRIPTOR_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_VALUE**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_FULFILLMENT_IDS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Attri_Required_STOPS_INSTRUCTIONS_NAME**: $.message.order.fulfillments[*].stops[*].instructions.name must be present in the payload
	
	- **condition Attri_Required_LOCATION_DESCRIPTOR_NAME**: $.message.order.fulfillments[*].stops[*].location.descriptor.name must be present in the payload
	
	- **condition Attri_Required_LOCATION_DESCRIPTOR_CODE**: $.message.order.fulfillments[*].stops[*].location.descriptor.code must be present in the payload
	
	- **condition Attri_Required_STOPS_LOCATION_GPS**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition Attri_Required_STOPS_AUTHORIZATION_TOKEN**: $.message.order.fulfillments[*].stops[*].authorization.token must be present in the payload
	
	- **condition Attri_Required_STOPS_AUTHORIZATION_VALID_TO**: $.message.order.fulfillments[*].stops[*].authorization.valid_to must be present in the payload
	
	- **condition Attri_Required_ORDER_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Attri_Required_BREAKUP_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
	- **condition Attri_Required_BREAKUP_PRICE_CURRENCY**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition Attri_Required_BREAKUP_PRICE_VALUE**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_TRANSACTION_ID**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_CURRENCY**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_AMOUNT**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_CANCEL_BY_DURATION**: $.message.order.cancellation_terms[*].cancel_by.duration must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.1**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	  - **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY.2**: $.message.order.fulfillments[*].vehicle.category must be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_STOPS_AUTHORIZATION_TYPE.1**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	  - **condition Enum_Required_STOPS_AUTHORIZATION_TYPE.2**: $.message.order.fulfillments[*].stops[*].authorization.type must be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_STATUS**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition Attri_Required__CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_VERSION**: $.context.version must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Attri_Required__CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Attri_Required__CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_ID**: $.message.order.id must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_STATUS**: $.message.order.status must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Attri_Required_ITEMS_DESCRIPTOR_NAME**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_CURRENCY**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Attri_Required_ITEMS_PRICE_VALUE**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_FULFILLMENT_IDS**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_LABEL**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Attri_Required_ITEMS_TIME_DURATION**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Attri_Required_ORDER_PROVIDER_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Attri_Required_PROVIDER_DESCRIPTOR_NAME**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Attri_Required_ORDER_FULFILLMENTS_ID**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Attri_Required_STOPS_LOCATION_GPS**: $.message.order.fulfillments[*].stops[*].location.gps must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Attri_Required_QUOTE_PRICE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Attri_Required_BREAKUP_ITEM_ID**: $.message.order.quote.breakup[*].item.id must be present in the payload
	
	- **condition Attri_Required_ORDER_PAYMENTS_ID**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_TRANSACTION_ID**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_CURRENCY**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Attri_Required_PAYMENTS_PARAMS_AMOUNT**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_CANCEL_BY_DURATION**: $.message.order.cancellation_terms[*].cancel_by.duration must be present in the payload
	
	- **condition Attri_Required_ORDER_ITEMS_CATEGORY_IDS**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_START**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Attri_Required_TIME_RANGE_END**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_CURRENCY**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Attri_Required_ITEM_PRICE_VALUE**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Attri_Required_QUANTITY_SELECTED_COUNT_2**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_URL**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Attri_Required_CANCELLATION_TERMS_EXTERNAL_REF_MIMETYPE**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_CREATED_AT**: $.message.order.created_at must be present in the payload
	
	- **condition Attri_Required_MESSAGE_ORDER_UPDATED_AT**: $.message.order.updated_at must be present in the payload
	
	- **condition Enum_Required__CONTEXT_ACTION**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_ACTION.1**: every element of $.context.action must be in ["on_status"]
	  - **condition Enum_Required__CONTEXT_ACTION.2**: $.context.action must be present in the payload
	
	- **condition Enum_Required_LOCATION_COUNTRY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Enum_Required_LOCATION_COUNTRY_CODE.2**: $.context.location.country.code must be present in the payload
	
	- **condition Enum_Required_LOCATION_CITY_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_LOCATION_CITY_CODE.1**: every element of $.context.location.city.code must be in ["std:080"]
	  - **condition Enum_Required_LOCATION_CITY_CODE.2**: $.context.location.city.code must be present in the payload
	
	- **condition Enum_Required__CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required__CONTEXT_DOMAIN.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Enum_Required__CONTEXT_DOMAIN.2**: $.context.domain must be present in the payload
	
	- **condition Enum_Required_ITEMS_DESCRIPTOR_CODE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Enum_Required_ITEMS_DESCRIPTOR_CODE.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_VEHICLE_CATEGORY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_FULFILLMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP"]
	  - **condition Enum_Required_ORDER_FULFILLMENTS_TYPE.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Enum_Required_FULFILLMENTS_STOPS_TYPE**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Enum_Required_FULFILLMENTS_STOPS_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_TYPE**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Enum_Required_STOPS_AUTHORIZATION_STATUS**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED"]
	
		> Note: **Condition Enum_Required_STOPS_AUTHORIZATION_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_STATUS**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Enum_Required_ORDER_PAYMENTS_STATUS.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Enum_Required_ORDER_PAYMENTS_COLLECTED_BY.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Enum_Required_ORDER_PAYMENTS_TYPE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Enum_Required_ORDER_PAYMENTS_TYPE.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Enum_Required_QUOTE_BREAKUP_TITLE**: all of the following sub conditions must be met:
	
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Enum_Required_QUOTE_BREAKUP_TITLE.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_INFO_Tag_Required_STATE_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_0_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition validate_tag_0_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition validate_tag_0_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE**: every element of $.message.order.items[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition FARE_POLICY_Tag_Required_ITEMS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_1_FARE_POLICY**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition BUYER_FINDER_FEES_Tag_Required_TAGS_DESCRIPTOR_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition validate_tag_2_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition validate_tag_2_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]