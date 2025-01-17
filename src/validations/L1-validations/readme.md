

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition Required_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_TTL**: $.context.ttl must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["search"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: every element of $.context.location.country.code must be in ["IND"]
	
		> Note: **Condition Required_Country_Code_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.location.country.code must **not** be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Vehicle_Category_and_ENUM.1**: every element of $.message.intent.fulfillment.vehicle.category must be in ["METRO"]
	  - **condition Required_Vehicle_Category_and_ENUM.2**: $.message.intent.fulfillment.vehicle.category must be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: every element of $.message.intent.fulfillment.type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition Fullfillment_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.intent.fulfillment.stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.intent.fulfillment.stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.intent.fulfillment.state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_Group_ENUM**: every element of $.message.intent.payment.tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.payment.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tags_ENUM_for_BUYER_FINDER_FEES**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition Tags_ENUM_for_SETTLEMENT_TERMS**: every element of $.message.intent.payment.tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition Tag_Group_ENUM_PAG**: every element of $.message.intent.tags[*].descriptor.code must be in ["PAGINATION"]
	
		> Note: **Condition Tag_Group_ENUM_PAG** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tags_ENUM_for_PAGINATION**: every element of $.message.intent.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["PAGINATION_ID", "REQUESTED_PAGE_NUMBER"]

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Selected_Item_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Provider_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["select"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Item_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition Fullfillment_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition Quote_Breakup_Title_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Selected_Item_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Provider_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Collected_By**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Required_Payment_Status**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Required_Payment_Type**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["init"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Item_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition Fullfillment_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition Quote_Breakup_Title_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tags_ENUM_for_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition Tags_ENUM_for_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Selected_Item_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Provider_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Payment_Id**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Required_Payment_Transaction_Id**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Required_Payment_Currency**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Required_Payment_Amount**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["confirm"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Item_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].descriptor.code must **not** be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition Fullfillment_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Payment_status**: all of the following sub conditions must be met:
	
	  - **condition Payment_status.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Payment_status.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Payment_Collected_By_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Collected_By_ENUM.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Payment_Collected_By_ENUM.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Payment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Type_ENUM.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Payment_Type_ENUM.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
		> Note: **Condition Quote_Breakup_Title_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].title must **not** be present in the payload

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["status"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Order_Id**: $.message.order_id must be present in the payload
	
	- **condition Required_Cancellation_Id**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition Required_Message_Name**: $.message.descriptor.name must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["cancel"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.descriptor.code must be in ["SOFT-CANCEL", "CONFIRM-CANCEL"]
	  - **condition Item_Code_ENUM.2**: $.message.descriptor.code must be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Catalog_Name**: $.message.catalog.descriptor.name must be present in the payload
	
	- **condition Required_Provider_Id**: $.message.catalog.providers[*].id must be present in the payload
	
	- **condition Required_Provider_Name**: $.message.catalog.providers[*].descriptor.name must be present in the payload
	
	- **condition Required_Payment_Id**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
	- **condition Required_Fulfillment_Id**: $.message.catalog.providers[*].fulfillments[*].id must be present in the payload
	
	- **condition Required_Category_Id**: $.message.catalog.providers[*].categories[*].id must be present in the payload
	
	- **condition Required_Provider_Time_Start**: $.message.catalog.providers[*].time.range.start must be present in the payload
	
	- **condition Required_Provider_Time_End**: $.message.catalog.providers[*].time.range.end must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["on_search"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["SEATER", "SLEEPER", "SEMI_SLEEPER", "TICKET", "PASS"]
	  - **condition Item_Code_ENUM.2**: $.message.catalog.providers[*].categories[*].descriptor.code must be present in the payload
	
	- **condition Required_Item_Id_and_ENUM**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
		> Note: **Condition Required_Item_Id_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
	
	- **condition Vehicle_Category_ENUM**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Vehicle_Category_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Stops_type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Stops_type_ENUM.1**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	  - **condition Stops_type_ENUM.2**: $.message.catalog.providers[*].fulfillments[*].type must be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_STATE**: every element of $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Payment_Collected_By_ENUM**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]
	
		> Note: **Condition Payment_Collected_By_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].status must **not** be present in the payload
	
	- **condition Payment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Type_ENUM.1**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Payment_Type_ENUM.2**: $.message.catalog.providers[*].payments[*].collected_by must be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition Quote_Breakup_Title_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].type must **not** be present in the payload
	
	- **condition Tag_Group_ENUM_Policy**: every element of $.message.catalog.providers[*].items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition Tag_Group_ENUM_Policy** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Fair_Policy**: every element of $.message.catalog.providers[*].items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition Tag_Group_ENUM_TICKET**: every element of $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition Tag_Group_ENUM_TICKET** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Route_Info**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_Ticket_Info**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_Trip_Details**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_Info**: every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition Tag_Group_ENUM_BUYER**: every element of $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition Tag_Group_ENUM_BUYER** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_Enum_for_BUYER_FINDER_FEES**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition Tag_Enum_for_SETTLEMENT_TERMS**: every element of $.message.catalog.providers[*].payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]
	
	- **condition Tag_Group_ENUM**: every element of $.message.catalog.providers[*].descriptor.code must be in ["SCHEDULED_INFO"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.providers[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_Enum_for_SCHEDULED_INFO**: every element of $.message.catalog.providers[*].tags[?(@.descriptor.code=='SCHEDULED_INFO')].list[*].descriptor.code must be in ["GTFS"]
	
	- **condition PAGINATION_CHECK**: every element of $.message.catalog.tags[*].descriptor.code must be in ["PAGINATION"]
	
		> Note: **Condition PAGINATION_CHECK** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.catalog.tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tags_ENUM_for_PAGINATION**: every element of $.message.catalog.tags[?(@.descriptor.code=='PAGINATION')].list[*].descriptor.code must be in ["PAGINATION_ID", "CURRENT_PAGE_NUMBER", "MAX_PAGE_NUMBER"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Item_Price_Currency**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Required_Item_Price_Value**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Required_Item_Selected_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Items_Fulfillment_Id**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Required_Item_Time_Label**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Required_Item_Time_Duration**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Required_Provider_Id**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Provider_Name**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Required_Fulfillment_Id**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Required_Quote_Value**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Required_Quote_Currency**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Required_Item_Category_Id**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Required_Provider_Time_Start**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Required_Provider_Time_End**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Required_Break_Up_Item_Currency**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Required_Break_Up_Item_Value**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Required_Break_Up_Item_Count**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Url**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Mimetype**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["on_select"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Item_Code_ENUM.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Fullfillment_Type_ENUM.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	  - **condition Fullfillment_Type_ENUM.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Quote_Breakup_Title_ENUM.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Quote_Breakup_Title_ENUM.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition Tag_Group_ENUM_ROUTE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition Tag_Group_ENUM_ROUTE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Fair_Policy**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Item_Price_Currency**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Required_Item_Price_Value**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Required_Item_Selected_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Items_Fulfillment_Id**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Required_Item_Time_Label**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Required_Item_Time_Duration**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Required_Provider_Id**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Provider_Name**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Required_Fulfillment_Id**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Required_Quote_Value**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Required_Quote_Currency**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Required_Payment_Id**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Required_Item_Category_Id**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Required_Provider_Time_Start**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Required_Provider_Time_End**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Required_Break_Up_Item_Count**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition Required_Break_Up_Item_Value**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Required_Break_Up_Item_Currency**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Url**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Mimetype**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["on_init"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Item_Code_ENUM.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Fullfillment_Type_ENUM.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	  - **condition Fullfillment_Type_ENUM.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition ORDER_PAYMENT_STATUS_ENUM**: all of the following sub conditions must be met:
	
	  - **condition ORDER_PAYMENT_STATUS_ENUM.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition ORDER_PAYMENT_STATUS_ENUM.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Payment_Collected_By_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Collected_By_ENUM.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Payment_Collected_By_ENUM.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Payment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Type_ENUM.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Payment_Type_ENUM.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Quote_Breakup_Title_ENUM.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Quote_Breakup_Title_ENUM.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition POLICY_CHECK**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition POLICY_CHECK** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Fair_Policy**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition Tag_Enum**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition Tag_Enum** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_Enum_for_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition Tag_Enum_for_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Order_Id**: $.message.order.id must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Item_Name**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Required_Item_Price_Currency**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Required_Item_Price_Value**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Required_Item_Selected_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Item_Fulfillment_Id**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Required_Item_Time_Label**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Required_Item_Time_Duration**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Required_Fulfillment_Id**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Provider_Name**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Required_Provider_Id**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Required_Quote_Value**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Required_Quote_Currency**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Required_Payment_Id**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Required_Payment_Transaction_Id**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Required_Payment_Currency**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Required_Payment_Amount**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Required_Item_Category_Id**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Required_Provider_Time_Start**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Required_Provider_Time_End**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Required_Break_Up_Item_Value**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Required_Break_Up_Item_Price_Currency**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Required_Break_Up_Item_Count**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Url**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Mimetype**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Required_Created_At**: $.message.order.created_at must be present in the payload
	
	- **condition Required_Updated_At**: $.message.order.updated_at must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["on_confirm"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Item_Code_ENUM.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Fullfillment_Type_ENUM.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	  - **condition Fullfillment_Type_ENUM.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition ORDER_PAYMENT_STATUS_ENUM**: all of the following sub conditions must be met:
	
	  - **condition ORDER_PAYMENT_STATUS_ENUM.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition ORDER_PAYMENT_STATUS_ENUM.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Payment_Collected_By_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Collected_By_ENUM.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Payment_Collected_By_ENUM.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Payment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Type_ENUM.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Payment_Type_ENUM.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Quote_Breakup_Title_ENUM.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Quote_Breakup_Title_ENUM.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition Order_Status_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Order_Status_ENUM.1**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	  - **condition Order_Status_ENUM.2**: $.message.order.status must be present in the payload
	
	- **condition ROUTE_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition ROUTE_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition Fare_Policy**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition Fare_Policy** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Fair_Policy**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_Enum_for_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition Tag_Enum_for_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.id must be present in the payload
	
	- **condition Required_item_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Message_Name**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Required_Item_Price_Currency**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Required_Item_Price_Value**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Required_Item_Selected_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Item_Fulfillment_Id**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Required_Item_Category_Id**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Required_Item_Time_Label**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Required_Item_Time_Duration**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Required_Provider_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Provider_Name**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Required_Provider_Images**: $.message.order.provider.descriptor.images[*].url must be present in the payload
	
	- **condition Required_Provider_Time_Start**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Required_Provider_Time_End**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Required_Fulfillment_Id**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Required_Quote_Value**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Required_Quote_Currency**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Required_Payment_Id**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Required_Payment_Bank_Code**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition Required_Payment_Bank_Account_Number**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Url**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Mimetype**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Required_Cancelled_By**: $.message.order.cancellation.cancelled_by must be present in the payload
	
	- **condition Required_Cancellation_Time**: $.message.order.cancellation.time must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Item_Code_ENUM.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Fullfillment_Type_ENUM.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	  - **condition Fullfillment_Type_ENUM.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Payment_status**: all of the following sub conditions must be met:
	
	  - **condition Payment_status.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Payment_status.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Payment_Collected_By_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Collected_By_ENUM.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Payment_Collected_By_ENUM.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Payment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Type_ENUM.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Payment_Type_ENUM.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Quote_Breakup_Title_ENUM.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Quote_Breakup_Title_ENUM.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition Order_Status_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Order_Status_ENUM.1**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	  - **condition Order_Status_ENUM.2**: $.message.order.status must be present in the payload
	
	- **condition Fulfillment_STATE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition Fulfillment_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition Fare_Policy**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition Fare_Policy** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Fair_Policy**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_Enum_for_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition Tag_Enum_for_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Order_Id**: $.message.order.id must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Item_Name**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Required_Item_Price_Currency**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Required_Item_Price_Value**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Required_Item_Selected_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Item_Fulfillment_Id**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Required_Item_Time_Label**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Required_Item_Time_Duration**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Required_Provider_Id**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Provider_Name**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Required_Fulfillment_Id**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Required_Quote_Value**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Required_Quote_Currency**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Required_Quote_Breakup_Currency**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition Required_Quote_Breakup_Value**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition Required_Payment_Id**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Required_Payment_Transaction_Id**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Required_Payment_Currency**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Required_Payment_Amount**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["on_cancel"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Item_Code_ENUM.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
		> Note: **Condition Fullfillment_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Payment_status**: all of the following sub conditions must be met:
	
	  - **condition Payment_status.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Payment_status.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Payment_Collected_By_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Collected_By_ENUM.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Payment_Collected_By_ENUM.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Payment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Type_ENUM.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Payment_Type_ENUM.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Quote_Breakup_Title_ENUM.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Quote_Breakup_Title_ENUM.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition Order_Status_ENUM**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	
		> Note: **Condition Order_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.status must **not** be present in the payload
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition Fare_Policy**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition Fare_Policy** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Fair_Policy**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition Requied_City_Code**: $.context.location.city.code must be present in the payload
	
	- **condition Required_Timestamp**: $.context.timestamp must be present in the payload
	
	- **condition Required_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition Required_Transaction_ID**: $.context.transaction_id must be present in the payload
	
	- **condition Required_Message_ID**: $.context.message_id must be present in the payload
	
	- **condition Required_Version**: $.context.version must be present in the payload
	
	- **condition Required_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition Required_ttl**: $.context.ttl must be present in the payload
	
	- **condition Required_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition Required_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition Required_Item_Id**: $.message.order.id must be present in the payload
	
	- **condition Required_Provider_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition Required_Message_Name**: $.message.order.items[*].descriptor.name must be present in the payload
	
	- **condition Required_Item_Price_Currency**: $.message.order.items[*].price.currency must be present in the payload
	
	- **condition Required_Item_Price_Value**: $.message.order.items[*].price.value must be present in the payload
	
	- **condition Required_Item_Selected_Count**: $.message.order.items[*].quantity.selected.count must be present in the payload
	
	- **condition Required_Item_Fulfillment_Id**: $.message.order.items[*].fulfillment_ids[*] must be present in the payload
	
	- **condition Required_Item_Time_Label**: $.message.order.items[*].time.label must be present in the payload
	
	- **condition Required_Item_Time_Duration**: $.message.order.items[*].time.duration must be present in the payload
	
	- **condition Required_Provider_Id**: $.message.order.provider.id must be present in the payload
	
	- **condition Required_Provider_Name**: $.message.order.provider.descriptor.name must be present in the payload
	
	- **condition Required_Fulfillment_Id**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition Required_Quote_Value**: $.message.order.quote.price.value must be present in the payload
	
	- **condition Required_Quote_Currency**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition Required_payment_Id**: $.message.order.payments[*].id must be present in the payload
	
	- **condition Required_Payment_Transaction_Id**: $.message.order.payments[*].params.transaction_id must be present in the payload
	
	- **condition Required_Payment_Currency**: $.message.order.payments[*].params.currency must be present in the payload
	
	- **condition Required_Payment_Amount**: $.message.order.payments[*].params.amount must be present in the payload
	
	- **condition Required_Payment_Bank_Code**: $.message.order.payments[*].params.bank_code must be present in the payload
	
	- **condition Required_Payment_Bank_Account_Number**: $.message.order.payments[*].params.bank_account_number must be present in the payload
	
	- **condition Required_Payment_Virtual_Payment_Address**: $.message.order.payments[*].params.virtual_payment_address must be present in the payload
	
	- **condition Required_Item_Category_Id**: $.message.order.items[*].category_ids[*] must be present in the payload
	
	- **condition Required_Provider_Time_Start**: $.message.order.provider.time.range.start must be present in the payload
	
	- **condition Required_Provider_Time_End**: $.message.order.provider.time.range.end must be present in the payload
	
	- **condition Required_Break_Up_Item_Currency**: $.message.order.quote.breakup[*].item.price.currency must be present in the payload
	
	- **condition Required_Break_Up_Item_Value**: $.message.order.quote.breakup[*].item.price.value must be present in the payload
	
	- **condition Required_Break_Up_Item_Count**: $.message.order.quote.breakup[*].item.quantity.selected.count must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Url**: $.message.order.cancellation_terms[*].external_ref.url must be present in the payload
	
	- **condition Required_Cancellation_Terms_External_Ref_Mimetype**: $.message.order.cancellation_terms[*].external_ref.mimetype must be present in the payload
	
	- **condition Required_Created_At**: $.message.order.created_at must be present in the payload
	
	- **condition Required_Updated_At**: $.message.order.updated_at must be present in the payload
	
	- **condition Required_Action_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Action_and_ENUM.1**: every element of $.context.action must be in ["on_status"]
	  - **condition Required_Action_and_ENUM.2**: $.context.action must be present in the payload
	
	- **condition Required_Country_Code_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Country_Code_and_ENUM.1**: every element of $.context.location.country.code must be in ["IND"]
	  - **condition Required_Country_Code_and_ENUM.2**: $.context.location.country.code must be present in the payload
	
	- **condition Required_Domain_and_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Required_Domain_and_ENUM.1**: every element of $.context.domain must be in ["ONDC:TRV11"]
	  - **condition Required_Domain_and_ENUM.2**: $.context.domain must be present in the payload
	
	- **condition Item_Code_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Item_Code_ENUM.1**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	  - **condition Item_Code_ENUM.2**: $.message.order.items[*].descriptor.code must be present in the payload
	
	- **condition Required_Vehicle_Category_and_ENUM**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
		> Note: **Condition Required_Vehicle_Category_and_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].vehicle.category must **not** be present in the payload
	
	- **condition Fullfillment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Fullfillment_Type_ENUM.1**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	  - **condition Fullfillment_Type_ENUM.2**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition Stops_type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
		> Note: **Condition Stops_type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].type must **not** be present in the payload
	
	- **condition Authorization_Type_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
		> Note: **Condition Authorization_Type_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.type must **not** be present in the payload
	
	- **condition Authorization_Status_ENUM**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
		> Note: **Condition Authorization_Status_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].stops[*].authorization.status must **not** be present in the payload
	
	- **condition Fulfillment_State_Code_ENUM**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
		> Note: **Condition Fulfillment_State_Code_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Payment_status**: all of the following sub conditions must be met:
	
	  - **condition Payment_status.1**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	  - **condition Payment_status.2**: $.message.order.payments[*].status must be present in the payload
	
	- **condition Payment_Collected_By_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Collected_By_ENUM.1**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	  - **condition Payment_Collected_By_ENUM.2**: $.message.order.payments[*].collected_by must be present in the payload
	
	- **condition Payment_Type_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Payment_Type_ENUM.1**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	  - **condition Payment_Type_ENUM.2**: $.message.order.payments[*].type must be present in the payload
	
	- **condition Quote_Breakup_Title_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Quote_Breakup_Title_ENUM.1**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_FARE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	  - **condition Quote_Breakup_Title_ENUM.2**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition Order_Status_ENUM**: all of the following sub conditions must be met:
	
	  - **condition Order_Status_ENUM.1**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]
	  - **condition Order_Status_ENUM.2**: $.message.order.status must be present in the payload
	
	- **condition Tag_Group_ENUM_Route**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["ROUTE_INFO", "TICKET_INFO", "TRIP_DETAILS", "INFO"]
	
		> Note: **Condition Tag_Group_ENUM_Route** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_ROUTE_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
	
	- **condition Tag_ENUM_for_TICKET_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
	
	- **condition Tag_ENUM_for_TRIP_DETAILS**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
	
	- **condition Tag_ENUM_for_INFO**: every element of $.message.order.fulfillments[*].tags[?(@.state.descriptor.code=='INFO')].list[*].descriptor.code must be in ["PARENT_ITEM_ID"]
	
	- **condition Fare_Policy**: every element of $.message.order.items[*].tags[*].descriptor.code must be in ["FARE_POLICY"]
	
		> Note: **Condition Fare_Policy** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.items[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_ENUM_for_Fair_Policy**: every element of $.message.order.items[*].tags[?(@.descriptor.code=='FARE_POLICY')].list[*].descriptor.code must be in ["RESTRICTED_PERSON", "RESTRICTION_PROOF"]
	
	- **condition Tag_Group_ENUM**: every element of $.message.order.payments[*].tags[*].descriptor.code must be in ["BUYER_FINDER_FEES", "SETTLEMENT_TERMS"]
	
		> Note: **Condition Tag_Group_ENUM** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payments[*].tags[*].descriptor.code must **not** be present in the payload
	
	- **condition Tag_Enum_for_BUYER_FINDER_FEES**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[*].descriptor.code must be in ["BUYER_FINDER_FEES_PERCENTAGE", "BUYER_FINDER_FEES_AMOUNT"]
	
	- **condition Tag_Enum_for_SETTLEMENT_TERMS**: every element of $.message.order.payments[*].tags[?(@.descriptor.code=='SETTLEMENT_TERMS')].list[*].descriptor.code must be in ["SETTLEMENT_WINDOW", "SETTLEMENT_BASIS", "SETTLEMENT_TYPE", "MANDATORY_ARBITRATION", "COURT_JURISDICTION", "DELAY_INTEREST", "STATIC_TERMS", "SETTLEMENT_AMOUNT"]