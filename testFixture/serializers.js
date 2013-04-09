var netXmlSerializer = (function(){
// initialize cross-browser xml parser
    var parseXml = function() {
        if (typeof window.DOMParser != "undefined") {
            return function(xmlStr) {
                return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
            };
        } else if (typeof window.ActiveXObject != "undefined" &&  new window.ActiveXObject("Microsoft.XMLDOM")) {
            return function(xmlStr) {
                var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else {
            throw new Error("No XML parser found");
        }
    }();
		function deserializeNodeIValueContainer(node) {				
				var result = {};
			var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeBaseWorkflowAction(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
			return result;
		}

		function deserializeNodeChangeEntityFieldValueAction(node) {				
				var result = {};
			result.Operation = node.getElementsByTagName("Operation")[0].textContent;
var _EntityFieldNodes = node.getElementsByTagName("EntityField");
if (_EntityFieldNodes && _EntityFieldNodes.length > 0) {
	result.EntityField = deserializeNodeEntityFieldDto(_EntityFieldNodes[0]);
}
else{
	result.EntityField = null;
}
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
			return result;
		}

		function deserializeNodeLanguageDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Title = node.getElementsByTagName("Title")[0].textContent;
result.Code = node.getElementsByTagName("Code")[0].textContent;
			return result;
		}

		function deserializeNodeMoney(node) {				
				var result = {};
			result.Amount = node.getElementsByTagName("Amount")[0].textContent;
result.Currency = node.getElementsByTagName("Currency")[0].textContent;
			return result;
		}

		function deserializeNodeMemberKey(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeEvaluationExpression(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeSingleValueExpression(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeScalarValueMemberExpression(node) {				
				var result = {};
			var _MemberKeyNodes = node.getElementsByTagName("MemberKey");
if (_MemberKeyNodes && _MemberKeyNodes.length > 0) {
	result.MemberKey = deserializeNodeMemberKey(_MemberKeyNodes[0]);
}
else{
	result.MemberKey = null;
}
			return result;
		}

		function deserializeNodeArithmeticExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodeSingleValueExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodeSingleValueExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeMultiplyExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodeSingleValueExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodeSingleValueExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeEntityRelationForInput(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.RelationType = node.getElementsByTagName("RelationType")[0].textContent;
result.RelatedEntitiesIndexes = [];
var _RelatedEntitiesIndexesCollectionNode = node.getElementsByTagName("RelatedEntitiesIndexes");
if (_RelatedEntitiesIndexesCollectionNode != null && _RelatedEntitiesIndexesCollectionNode.length > 0) {
	var _RelatedEntitiesIndexesNodes = _RelatedEntitiesIndexesCollectionNode[0].getElementsByTagName("Int32");
	var _RelatedEntitiesIndexesItem;	
	for (i = 0; i < _RelatedEntitiesIndexesNodes.length; i++)
	{
		_RelatedEntitiesIndexesItem = deserializeNodeInt32(_RelatedEntitiesIndexesNodes[i]);
			result.RelatedEntitiesIndexes.push(_RelatedEntitiesIndexesItem);
	}						
}
else{
	result.RelatedEntitiesIndexes = null;
}
			return result;
		}

		function deserializeNodeEntityFilterModel(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.FilterEntityFieldId = parseInt(node.getElementsByTagName("FilterEntityFieldId")[0].textContent);
var FilterValueNode = node.getElementsByTagName("FilterValue")[0];
var FilterValueNodeType = FilterValueNode.getAttribute("xsi:type");

switch (FilterValueNodeType) {
	case "xsd:string":
		result.FilterValue = FilterValueNode.textContent;
		break;
	case "xsd:int":
		result.FilterValue = parseInt(FilterValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeEntityInfoForExport(node) {				
				var result = {};
			var _EntityNodes = node.getElementsByTagName("Entity");
if (_EntityNodes && _EntityNodes.length > 0) {
	result.Entity = deserializeNodeEntitySerializationPackage(_EntityNodes[0]);
}
else{
	result.Entity = null;
}
result.EntityFieldsInfo = [];
var _EntityFieldsInfoCollectionNode = node.getElementsByTagName("EntityFieldsInfo");
if (_EntityFieldsInfoCollectionNode != null && _EntityFieldsInfoCollectionNode.length > 0) {
	var _EntityFieldsInfoNodes = _EntityFieldsInfoCollectionNode[0].getElementsByTagName("EntityFieldInfoForExport");
	var _EntityFieldsInfoItem;	
	for (i = 0; i < _EntityFieldsInfoNodes.length; i++)
	{
		_EntityFieldsInfoItem = deserializeNodeEntityFieldInfoForExport(_EntityFieldsInfoNodes[i]);
			result.EntityFieldsInfo.push(_EntityFieldsInfoItem);
	}						
}
else{
	result.EntityFieldsInfo = null;
}
result.InvalidMemberPaths = [];
var _InvalidMemberPathsCollectionNode = node.getElementsByTagName("InvalidMemberPaths");
if (_InvalidMemberPathsCollectionNode != null && _InvalidMemberPathsCollectionNode.length > 0) {
	var _InvalidMemberPathsNodes = _InvalidMemberPathsCollectionNode[0].getElementsByTagName("MemberAccessPath");
	var _InvalidMemberPathsItem;	
	for (i = 0; i < _InvalidMemberPathsNodes.length; i++)
	{
		_InvalidMemberPathsItem = deserializeNodeMemberAccessPath(_InvalidMemberPathsNodes[i]);
			result.InvalidMemberPaths.push(_InvalidMemberPathsItem);
	}						
}
else{
	result.InvalidMemberPaths = null;
}
			return result;
		}

		function deserializeNodeEntityWithCheckOutState(node) {				
				var result = {};
			result.EntityCheckedOut = node.getElementsByTagName("EntityCheckedOut")[0].textContent;
var _EntityNodes = node.getElementsByTagName("Entity");
if (_EntityNodes && _EntityNodes.length > 0) {
	result.Entity = deserializeNodeEntityDto(_EntityNodes[0]);
}
else{
	result.Entity = null;
}
			return result;
		}

		function deserializeNodeRenameFolderRequest(node) {				
				var result = {};
			result.FolderId = parseInt(node.getElementsByTagName("FolderId")[0].textContent);
result.NewName = node.getElementsByTagName("NewName")[0].textContent;
			return result;
		}

		function deserializeNodeRemoveItemRequest(node) {				
				var result = {};
			result.ItemType = node.getElementsByTagName("ItemType")[0].textContent;
result.ItemId = parseInt(node.getElementsByTagName("ItemId")[0].textContent);
result.RemoveConversations = node.getElementsByTagName("RemoveConversations")[0].textContent;
			return result;
		}

		function deserializeNodeAppointmentIdentitiesDto(node) {				
				var result = {};
			result.AppointmentId = parseInt(node.getElementsByTagName("AppointmentId")[0].textContent);
result.AppointmentRecurrenceId = node.getElementsByTagName("AppointmentRecurrenceId")[0].textContent;
			return result;
		}

		function deserializeNodeSaveUserWorkspacesDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.Workspaces = [];
var _WorkspacesCollectionNode = node.getElementsByTagName("Workspaces");
if (_WorkspacesCollectionNode != null && _WorkspacesCollectionNode.length > 0) {
	var _WorkspacesNodes = _WorkspacesCollectionNode[0].getElementsByTagName("WorkspaceSettingsDto");
	var _WorkspacesItem;	
	for (i = 0; i < _WorkspacesNodes.length; i++)
	{
		_WorkspacesItem = deserializeNodeWorkspaceSettingsDto(_WorkspacesNodes[i]);
			result.Workspaces.push(_WorkspacesItem);
	}						
}
else{
	result.Workspaces = null;
}
			return result;
		}

		function deserializeNodeMessageActionDto(node) {				
				var result = {};
			result.Users = [];
var _UsersCollectionNode = node.getElementsByTagName("Users");
if (_UsersCollectionNode != null && _UsersCollectionNode.length > 0) {
	var _UsersNodes = _UsersCollectionNode[0].getElementsByTagName("User");
	var _UsersItem;	
	for (i = 0; i < _UsersNodes.length; i++)
	{
		_UsersItem = deserializeNodeUser(_UsersNodes[i]);
			result.Users.push(_UsersItem);
	}						
}
else{
	result.Users = null;
}
result.UserGroups = [];
var _UserGroupsCollectionNode = node.getElementsByTagName("UserGroups");
if (_UserGroupsCollectionNode != null && _UserGroupsCollectionNode.length > 0) {
	var _UserGroupsNodes = _UserGroupsCollectionNode[0].getElementsByTagName("UserGroupDto");
	var _UserGroupsItem;	
	for (i = 0; i < _UserGroupsNodes.length; i++)
	{
		_UserGroupsItem = deserializeNodeUserGroupDto(_UserGroupsNodes[i]);
			result.UserGroups.push(_UserGroupsItem);
	}						
}
else{
	result.UserGroups = null;
}
result.RecipientEmails = [];
var _RecipientEmailsCollectionNode = node.getElementsByTagName("RecipientEmails");
if (_RecipientEmailsCollectionNode != null && _RecipientEmailsCollectionNode.length > 0) {
	var _RecipientEmailsNodes = _RecipientEmailsCollectionNode[0].getElementsByTagName("String");
	var _RecipientEmailsItem;	
	for (i = 0; i < _RecipientEmailsNodes.length; i++)
	{
		_RecipientEmailsItem = deserializeNodeString(_RecipientEmailsNodes[i]);
			result.RecipientEmails.push(_RecipientEmailsItem);
	}						
}
else{
	result.RecipientEmails = null;
}
result.UserProperties = [];
var _UserPropertiesCollectionNode = node.getElementsByTagName("UserProperties");
if (_UserPropertiesCollectionNode != null && _UserPropertiesCollectionNode.length > 0) {
	var _UserPropertiesNodes = _UserPropertiesCollectionNode[0].getElementsByTagName("String");
	var _UserPropertiesItem;	
	for (i = 0; i < _UserPropertiesNodes.length; i++)
	{
		_UserPropertiesItem = deserializeNodeString(_UserPropertiesNodes[i]);
			result.UserProperties.push(_UserPropertiesItem);
	}						
}
else{
	result.UserProperties = null;
}
var _MessageTypeNodes = node.getElementsByTagName("MessageType");
if (_MessageTypeNodes && _MessageTypeNodes.length > 0) {
	result.MessageType = deserializeNodeMessageType(_MessageTypeNodes[0]);
}
else{
	result.MessageType = null;
}
result.SubjectTemplate = node.getElementsByTagName("SubjectTemplate")[0].textContent;
result.MessageTemplate = node.getElementsByTagName("MessageTemplate")[0].textContent;
result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
			return result;
		}

		function deserializeNodeMessageType(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeUserToGroup(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.UserGroupId = parseInt(node.getElementsByTagName("UserGroupId")[0].textContent);
			return result;
		}

		function deserializeNodePredicateExpression(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeLogicalOperationExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodePredicateExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodePredicateExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeLogicalAndExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodePredicateExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodePredicateExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeComparisonOperation(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeComparisonExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodeSingleValueExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodeSingleValueExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeEmailReplyDto(node) {				
				var result = {};
			result.ToEmail = node.getElementsByTagName("ToEmail")[0].textContent;
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.ReplyBody = node.getElementsByTagName("ReplyBody")[0].textContent;
			return result;
		}

		function deserializeNodeSavedEntityIdMapping(node) {				
				var result = {};
			result.OriginalId = parseInt(node.getElementsByTagName("OriginalId")[0].textContent);
result.NewId = parseInt(node.getElementsByTagName("NewId")[0].textContent);
result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.WasChanged = node.getElementsByTagName("WasChanged")[0].textContent;
			return result;
		}

		function deserializeNodeInputExtraDataRequest(node) {				
				var result = {};
			result.ParentTypeIds = [];
var _ParentTypeIdsCollectionNode = node.getElementsByTagName("ParentTypeIds");
if (_ParentTypeIdsCollectionNode != null && _ParentTypeIdsCollectionNode.length > 0) {
	var _ParentTypeIdsNodes = _ParentTypeIdsCollectionNode[0].getElementsByTagName("Int32");
	var _ParentTypeIdsItem;	
	for (i = 0; i < _ParentTypeIdsNodes.length; i++)
	{
		_ParentTypeIdsItem = deserializeNodeInt32(_ParentTypeIdsNodes[i]);
			result.ParentTypeIds.push(_ParentTypeIdsItem);
	}						
}
else{
	result.ParentTypeIds = null;
}
result.HasAny = node.getElementsByTagName("HasAny")[0].textContent;
result.LoadUsers = node.getElementsByTagName("LoadUsers")[0].textContent;
			return result;
		}

		function deserializeNodeUserEntityPropertyValue(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
			return result;
		}

		function deserializeNodeEntityTypeEntityDtosWithOverview(node) {				
				var result = {};
			var _EntityTypeNodes = node.getElementsByTagName("EntityType");
if (_EntityTypeNodes && _EntityTypeNodes.length > 0) {
	result.EntityType = deserializeNodeEntityTypeDto(_EntityTypeNodes[0]);
}
else{
	result.EntityType = null;
}
result.EntityDtos = [];
var _EntityDtosCollectionNode = node.getElementsByTagName("EntityDtos");
if (_EntityDtosCollectionNode != null && _EntityDtosCollectionNode.length > 0) {
	var _EntityDtosNodes = _EntityDtosCollectionNode[0].getElementsByTagName("EntityDto");
	var _EntityDtosItem;	
	for (i = 0; i < _EntityDtosNodes.length; i++)
	{
		_EntityDtosItem = deserializeNodeEntityDto(_EntityDtosNodes[i]);
			result.EntityDtos.push(_EntityDtosItem);
	}						
}
else{
	result.EntityDtos = null;
}
var _OverviewNodes = node.getElementsByTagName("Overview");
if (_OverviewNodes && _OverviewNodes.length > 0) {
	result.Overview = deserializeNodeEntityOverviewDto(_OverviewNodes[0]);
}
else{
	result.Overview = null;
}
			return result;
		}

		function deserializeNodeRenameModel(node) {				
				var result = {};
			result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
			return result;
		}

		function deserializeNodeFolderLinkUsage(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.EntityFieldName = node.getElementsByTagName("EntityFieldName")[0].textContent;
			return result;
		}

		function deserializeNodeDefaultMoney(node) {				
				var result = {};
			result.Amount = node.getElementsByTagName("Amount")[0].textContent;
result.Currency = node.getElementsByTagName("Currency")[0].textContent;
			return result;
		}

		function deserializeNodeExchangeSettingsDto(node) {				
				var result = {};
			result.Username = node.getElementsByTagName("Username")[0].textContent;
result.Password = node.getElementsByTagName("Password")[0].textContent;
result.License = node.getElementsByTagName("License")[0].textContent;
			return result;
		}

		function deserializeNodeUserUpdatedInformationDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.FirstName = node.getElementsByTagName("FirstName")[0].textContent;
result.LastName = node.getElementsByTagName("LastName")[0].textContent;
result.PlainPassword = node.getElementsByTagName("PlainPassword")[0].textContent;
result.Email = node.getElementsByTagName("Email")[0].textContent;
result.IsAdmin = node.getElementsByTagName("IsAdmin")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.IsActive = node.getElementsByTagName("IsActive")[0].textContent;
result.JobTitle = node.getElementsByTagName("JobTitle")[0].textContent;
result.PersonTitle = node.getElementsByTagName("PersonTitle")[0].textContent;
result.MobilePhone = node.getElementsByTagName("MobilePhone")[0].textContent;
result.Avatar = [];
var _AvatarCollectionNode = node.getElementsByTagName("Avatar");
if (_AvatarCollectionNode != null && _AvatarCollectionNode.length > 0) {
	var _AvatarNodes = _AvatarCollectionNode[0].getElementsByTagName("Byte");
	var _AvatarItem;	
	for (i = 0; i < _AvatarNodes.length; i++)
	{
		_AvatarItem = deserializeNodeByte(_AvatarNodes[i]);
			result.Avatar.push(_AvatarItem);
	}						
}
else{
	result.Avatar = null;
}
result.ExchangePassword = node.getElementsByTagName("ExchangePassword")[0].textContent;
result.ExchangeEmail = node.getElementsByTagName("ExchangeEmail")[0].textContent;
result.CreateNewAccount = node.getElementsByTagName("CreateNewAccount")[0].textContent;
result.RequireChangePassword = node.getElementsByTagName("RequireChangePassword")[0].textContent;
			return result;
		}

		function deserializeNodeCheckPermissions(node) {				
				var result = {};
			var _SecurityObjectNodes = node.getElementsByTagName("SecurityObject");
if (_SecurityObjectNodes && _SecurityObjectNodes.length > 0) {
	result.SecurityObject = deserializeNodeSecurityObject(_SecurityObjectNodes[0]);
}
else{
	result.SecurityObject = null;
}
result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
var _RoleNodes = node.getElementsByTagName("Role");
if (_RoleNodes && _RoleNodes.length > 0) {
	result.Role = deserializeNodeRole(_RoleNodes[0]);
}
else{
	result.Role = null;
}
			return result;
		}

		function deserializeNodeFileStorageInfo(node) {				
				var result = {};
			result.UniqueName = node.getElementsByTagName("UniqueName")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
			return result;
		}

		function deserializeNodeMultipleValueExpression(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeMemberMultipleValueExpression(node) {				
				var result = {};
			result.MemberPath = node.getElementsByTagName("MemberPath")[0].textContent;
			return result;
		}

		function deserializeNodeLogicalOrExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodePredicateExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodePredicateExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeEntityOverviewSpecification(node) {				
				var result = {};
			result.EntityOverviewId = parseInt(node.getElementsByTagName("EntityOverviewId")[0].textContent);
result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
			return result;
		}

		function deserializeNodeCopyEntitiesRequest(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.IdsToCopy = [];
var _IdsToCopyCollectionNode = node.getElementsByTagName("IdsToCopy");
if (_IdsToCopyCollectionNode != null && _IdsToCopyCollectionNode.length > 0) {
	var _IdsToCopyNodes = _IdsToCopyCollectionNode[0].getElementsByTagName("Int32");
	var _IdsToCopyItem;	
	for (i = 0; i < _IdsToCopyNodes.length; i++)
	{
		_IdsToCopyItem = deserializeNodeInt32(_IdsToCopyNodes[i]);
			result.IdsToCopy.push(_IdsToCopyItem);
	}						
}
else{
	result.IdsToCopy = null;
}
			return result;
		}

		function deserializeNodeUnsavedEntityRelationDto(node) {				
				var result = {};
			result.SavedEntityName = node.getElementsByTagName("SavedEntityName")[0].textContent;
result.SavedEntityId = parseInt(node.getElementsByTagName("SavedEntityId")[0].textContent);
result.SavedEntityPropertyName = node.getElementsByTagName("SavedEntityPropertyName")[0].textContent;
			return result;
		}

		function deserializeNodeSaveEntityResponse(node) {				
				var result = {};
			result.ChangedIds = [];
var _ChangedIdsCollectionNode = node.getElementsByTagName("ChangedIds");
if (_ChangedIdsCollectionNode != null && _ChangedIdsCollectionNode.length > 0) {
	var _ChangedIdsNodes = _ChangedIdsCollectionNode[0].getElementsByTagName("SavedEntityIdMapping");
	var _ChangedIdsItem;	
	for (i = 0; i < _ChangedIdsNodes.length; i++)
	{
		_ChangedIdsItem = deserializeNodeSavedEntityIdMapping(_ChangedIdsNodes[i]);
			result.ChangedIds.push(_ChangedIdsItem);
	}						
}
else{
	result.ChangedIds = null;
}
result.ModifiedAutonumberValues = [];
var _ModifiedAutonumberValuesCollectionNode = node.getElementsByTagName("ModifiedAutonumberValues");
if (_ModifiedAutonumberValuesCollectionNode != null && _ModifiedAutonumberValuesCollectionNode.length > 0) {
	var _ModifiedAutonumberValuesNodes = _ModifiedAutonumberValuesCollectionNode[0].getElementsByTagName("ModifiedAutonumberValue");
	var _ModifiedAutonumberValuesItem;	
	for (i = 0; i < _ModifiedAutonumberValuesNodes.length; i++)
	{
		_ModifiedAutonumberValuesItem = deserializeNodeModifiedAutonumberValue(_ModifiedAutonumberValuesNodes[i]);
			result.ModifiedAutonumberValues.push(_ModifiedAutonumberValuesItem);
	}						
}
else{
	result.ModifiedAutonumberValues = null;
}
			return result;
		}

		function deserializeNodeParentInitializationData(node) {				
				var result = {};
			result.Entities = [];
var _EntitiesCollectionNode = node.getElementsByTagName("Entities");
if (_EntitiesCollectionNode != null && _EntitiesCollectionNode.length > 0) {
	var _EntitiesNodes = _EntitiesCollectionNode[0].getElementsByTagName("EntityDto");
	var _EntitiesItem;	
	for (i = 0; i < _EntitiesNodes.length; i++)
	{
		_EntitiesItem = deserializeNodeEntityDto(_EntitiesNodes[i]);
			result.Entities.push(_EntitiesItem);
	}						
}
else{
	result.Entities = null;
}
result.EntityTypePermissions = node.getElementsByTagName("EntityTypePermissions")[0].textContent;
result.FieldsInfo = [];
var _FieldsInfoCollectionNode = node.getElementsByTagName("FieldsInfo");
if (_FieldsInfoCollectionNode != null && _FieldsInfoCollectionNode.length > 0) {
	var _FieldsInfoNodes = _FieldsInfoCollectionNode[0].getElementsByTagName("EntityFieldInfoForParent");
	var _FieldsInfoItem;	
	for (i = 0; i < _FieldsInfoNodes.length; i++)
	{
		_FieldsInfoItem = deserializeNodeEntityFieldInfoForParent(_FieldsInfoNodes[i]);
			result.FieldsInfo.push(_FieldsInfoItem);
	}						
}
else{
	result.FieldsInfo = null;
}
			return result;
		}

		function deserializeNodeParentInitializationDataWithId(node) {				
				var result = {};
			result.ParentEntityTypeId = parseInt(node.getElementsByTagName("ParentEntityTypeId")[0].textContent);
result.Entities = [];
var _EntitiesCollectionNode = node.getElementsByTagName("Entities");
if (_EntitiesCollectionNode != null && _EntitiesCollectionNode.length > 0) {
	var _EntitiesNodes = _EntitiesCollectionNode[0].getElementsByTagName("EntityDto");
	var _EntitiesItem;	
	for (i = 0; i < _EntitiesNodes.length; i++)
	{
		_EntitiesItem = deserializeNodeEntityDto(_EntitiesNodes[i]);
			result.Entities.push(_EntitiesItem);
	}						
}
else{
	result.Entities = null;
}
result.EntityTypePermissions = node.getElementsByTagName("EntityTypePermissions")[0].textContent;
result.FieldsInfo = [];
var _FieldsInfoCollectionNode = node.getElementsByTagName("FieldsInfo");
if (_FieldsInfoCollectionNode != null && _FieldsInfoCollectionNode.length > 0) {
	var _FieldsInfoNodes = _FieldsInfoCollectionNode[0].getElementsByTagName("EntityFieldInfoForParent");
	var _FieldsInfoItem;	
	for (i = 0; i < _FieldsInfoNodes.length; i++)
	{
		_FieldsInfoItem = deserializeNodeEntityFieldInfoForParent(_FieldsInfoNodes[i]);
			result.FieldsInfo.push(_FieldsInfoItem);
	}						
}
else{
	result.FieldsInfo = null;
}
			return result;
		}

		function deserializeNodeLoadEntityForParentRequest(node) {				
				var result = {};
			result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
result.EntityId = parseInt(node.getElementsByTagName("EntityId")[0].textContent);
			return result;
		}

		function deserializeNodeIMetadata(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.ParentUniqueId = node.getElementsByTagName("ParentUniqueId")[0].textContent;
result.Path = node.getElementsByTagName("Path")[0].textContent;
			return result;
		}

		function deserializeNodeFilterExpression(node) {				
				var result = {};
			var _CollectionNodes = node.getElementsByTagName("Collection");
if (_CollectionNodes && _CollectionNodes.length > 0) {
	result.Collection = deserializeNodeMultipleValueExpression(_CollectionNodes[0]);
}
else{
	result.Collection = null;
}
var _FilterConditionNodes = node.getElementsByTagName("FilterCondition");
if (_FilterConditionNodes && _FilterConditionNodes.length > 0) {
	result.FilterCondition = deserializeNodePredicateExpression(_FilterConditionNodes[0]);
}
else{
	result.FilterCondition = null;
}
			return result;
		}

		function deserializeNodeEntityOverviewGridData(node) {				
				var result = {};
			var _GridPropertiesNodes = node.getElementsByTagName("GridProperties");
if (_GridPropertiesNodes && _GridPropertiesNodes.length > 0) {
	result.GridProperties = deserializeNodeEntityOverviewGridProperties(_GridPropertiesNodes[0]);
}
else{
	result.GridProperties = null;
}
var _OverviewNodes = node.getElementsByTagName("Overview");
if (_OverviewNodes && _OverviewNodes.length > 0) {
	result.Overview = deserializeNodeEntityOverviewDto(_OverviewNodes[0]);
}
else{
	result.Overview = null;
}
var _GridDataNodes = node.getElementsByTagName("GridData");
if (_GridDataNodes && _GridDataNodes.length > 0) {
	result.GridData = deserializeNodeEntityViewDataWithSettings(_GridDataNodes[0]);
}
else{
	result.GridData = null;
}
result.AllEntityFields = [];
var _AllEntityFieldsCollectionNode = node.getElementsByTagName("AllEntityFields");
if (_AllEntityFieldsCollectionNode != null && _AllEntityFieldsCollectionNode.length > 0) {
	var _AllEntityFieldsNodes = _AllEntityFieldsCollectionNode[0].getElementsByTagName("EntityFieldDto");
	var _AllEntityFieldsItem;	
	for (i = 0; i < _AllEntityFieldsNodes.length; i++)
	{
		_AllEntityFieldsItem = deserializeNodeEntityFieldDto(_AllEntityFieldsNodes[i]);
			result.AllEntityFields.push(_AllEntityFieldsItem);
	}						
}
else{
	result.AllEntityFields = null;
}
			return result;
		}

		function deserializeNodeChildGridInitData(node) {				
				var result = {};
			result.FieldName = node.getElementsByTagName("FieldName")[0].textContent;
var _GridDataNodes = node.getElementsByTagName("GridData");
if (_GridDataNodes && _GridDataNodes.length > 0) {
	result.GridData = deserializeNodePrepareChildGridResponse(_GridDataNodes[0]);
}
else{
	result.GridData = null;
}
			return result;
		}

		function deserializeNodeSyncDataModel(node) {				
				var result = {};
			result.ModelVersion = parseInt(node.getElementsByTagName("ModelVersion")[0].textContent);
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.Data = [];
var _DataCollectionNode = node.getElementsByTagName("Data");
if (_DataCollectionNode != null && _DataCollectionNode.length > 0) {
	var _DataNodes = _DataCollectionNode[0].getElementsByTagName("Byte");
	var _DataItem;	
	for (i = 0; i < _DataNodes.length; i++)
	{
		_DataItem = deserializeNodeByte(_DataNodes[i]);
			result.Data.push(_DataItem);
	}						
}
else{
	result.Data = null;
}
result.ChunkNumber = parseInt(node.getElementsByTagName("ChunkNumber")[0].textContent);
result.ChunkPosition = parseInt(node.getElementsByTagName("ChunkPosition")[0].textContent);
result.LastChunk = node.getElementsByTagName("LastChunk")[0].textContent;
result.ChunkSessionId = node.getElementsByTagName("ChunkSessionId")[0].textContent;
			return result;
		}

		function deserializeNodeShareCalendarDto(node) {				
				var result = {};
			result.SubjectId = parseInt(node.getElementsByTagName("SubjectId")[0].textContent);
result.SubjectType = node.getElementsByTagName("SubjectType")[0].textContent;
result.SharedCalendarId = parseInt(node.getElementsByTagName("SharedCalendarId")[0].textContent);
			return result;
		}

		function deserializeNodeWorkflowConditionAction(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Branch = node.getElementsByTagName("Branch")[0].textContent;
var _ActionNodes = node.getElementsByTagName("Action");
if (_ActionNodes && _ActionNodes.length > 0) {
	result.Action = deserializeNodeBaseWorkflowAction(_ActionNodes[0]);
}
else{
	result.Action = null;
}
			return result;
		}

		function deserializeNodeWorkflowConditionalBranch(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
var _ConditionNodes = node.getElementsByTagName("Condition");
if (_ConditionNodes && _ConditionNodes.length > 0) {
	result.Condition = deserializeNodeWorkflowCondition(_ConditionNodes[0]);
}
else{
	result.Condition = null;
}
result.Actions = [];
var _ActionsCollectionNode = node.getElementsByTagName("Actions");
if (_ActionsCollectionNode != null && _ActionsCollectionNode.length > 0) {
	var _ActionsNodes = _ActionsCollectionNode[0].getElementsByTagName("WorkflowConditionAction");
	var _ActionsItem;	
	for (i = 0; i < _ActionsNodes.length; i++)
	{
		_ActionsItem = deserializeNodeWorkflowConditionAction(_ActionsNodes[i]);
			result.Actions.push(_ActionsItem);
	}						
}
else{
	result.Actions = null;
}
			return result;
		}

		function deserializeNodeSectorsWithRelatedBranchesInfo(node) {				
				var result = {};
			result.Sectors = [];
var _SectorsCollectionNode = node.getElementsByTagName("Sectors");
if (_SectorsCollectionNode != null && _SectorsCollectionNode.length > 0) {
	var _SectorsNodes = _SectorsCollectionNode[0].getElementsByTagName("SectorDto");
	var _SectorsItem;	
	for (i = 0; i < _SectorsNodes.length; i++)
	{
		_SectorsItem = deserializeNodeSectorDto(_SectorsNodes[i]);
			result.Sectors.push(_SectorsItem);
	}						
}
else{
	result.Sectors = null;
}
			return result;
		}

		function deserializeNodeShortEmailInfo(node) {				
				var result = {};
			result.EmailId = parseInt(node.getElementsByTagName("EmailId")[0].textContent);
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.SentDateTime = node.getElementsByTagName("SentDateTime")[0].textContent;
result.CreatorName = node.getElementsByTagName("CreatorName")[0].textContent;
result.IsRead = node.getElementsByTagName("IsRead")[0].textContent;
			return result;
		}

		function deserializeNodeEntityConversationLinkDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.ConversationId = parseInt(node.getElementsByTagName("ConversationId")[0].textContent);
result.EntityId = parseInt(node.getElementsByTagName("EntityId")[0].textContent);
result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
			return result;
		}

		function deserializeNodeEmailDmsViewDto(node) {				
				var result = {};
			result.EmailId = parseInt(node.getElementsByTagName("EmailId")[0].textContent);
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.SentDateTime = node.getElementsByTagName("SentDateTime")[0].textContent;
var _FolderNodes = node.getElementsByTagName("Folder");
if (_FolderNodes && _FolderNodes.length > 0) {
	result.Folder = deserializeNodeFolderDto(_FolderNodes[0]);
}
else{
	result.Folder = null;
}
result.IsRead = node.getElementsByTagName("IsRead")[0].textContent;
			return result;
		}

		function deserializeNodeFolderSubscriptionDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
var _FolderNodes = node.getElementsByTagName("Folder");
if (_FolderNodes && _FolderNodes.length > 0) {
	result.Folder = deserializeNodeFolderDto(_FolderNodes[0]);
}
else{
	result.Folder = null;
}
var _UserNodes = node.getElementsByTagName("User");
if (_UserNodes && _UserNodes.length > 0) {
	result.User = deserializeNodeUser(_UserNodes[0]);
}
else{
	result.User = null;
}
result.UploadFile = node.getElementsByTagName("UploadFile")[0].textContent;
result.UpdateFile = node.getElementsByTagName("UpdateFile")[0].textContent;
result.DeleteFile = node.getElementsByTagName("DeleteFile")[0].textContent;
result.RenameFolder = node.getElementsByTagName("RenameFolder")[0].textContent;
result.DeleteFolder = node.getElementsByTagName("DeleteFolder")[0].textContent;
			return result;
		}

		function deserializeNodeFolderRemoveModel(node) {				
				var result = {};
			var _FolderNodes = node.getElementsByTagName("Folder");
if (_FolderNodes && _FolderNodes.length > 0) {
	result.Folder = deserializeNodeFolderDto(_FolderNodes[0]);
}
else{
	result.Folder = null;
}
result.RemoveOutcome = node.getElementsByTagName("RemoveOutcome")[0].textContent;
			return result;
		}

		function deserializeNodeFileDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Uri = node.getElementsByTagName("Uri")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
var _FolderNodes = node.getElementsByTagName("Folder");
if (_FolderNodes && _FolderNodes.length > 0) {
	result.Folder = deserializeNodeFolderDto(_FolderNodes[0]);
}
else{
	result.Folder = null;
}
result.Label = node.getElementsByTagName("Label")[0].textContent;
result.Description = node.getElementsByTagName("Description")[0].textContent;
result.CreateDate = new Date(Date.parse(node.getElementsByTagName("CreateDate")[0].textContent));
result.ChangeDate = new Date(Date.parse(node.getElementsByTagName("ChangeDate")[0].textContent));
var _CreatorNodes = node.getElementsByTagName("Creator");
if (_CreatorNodes && _CreatorNodes.length > 0) {
	result.Creator = deserializeNodeUser(_CreatorNodes[0]);
}
else{
	result.Creator = null;
}
result.PrivateIntern = node.getElementsByTagName("PrivateIntern")[0].textContent;
result.PublicInternet = node.getElementsByTagName("PublicInternet")[0].textContent;
var _CheckOutOwnerNodes = node.getElementsByTagName("CheckOutOwner");
if (_CheckOutOwnerNodes && _CheckOutOwnerNodes.length > 0) {
	result.CheckOutOwner = deserializeNodeUser(_CheckOutOwnerNodes[0]);
}
else{
	result.CheckOutOwner = null;
}
result.CheckOutDate = new Date(Date.parse(node.getElementsByTagName("CheckOutDate")[0].textContent));
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.UniqueName = node.getElementsByTagName("UniqueName")[0].textContent;
result.MD5 = node.getElementsByTagName("MD5")[0].textContent;
result.UserPermissions = node.getElementsByTagName("UserPermissions")[0].textContent;
			return result;
		}

		function deserializeNodeSyncInfoDto(node) {				
				var result = {};
			result.EmailsChanged = [];
var _EmailsChangedCollectionNode = node.getElementsByTagName("EmailsChanged");
if (_EmailsChangedCollectionNode != null && _EmailsChangedCollectionNode.length > 0) {
	var _EmailsChangedNodes = _EmailsChangedCollectionNode[0].getElementsByTagName("EmailChange");
	var _EmailsChangedItem;	
	for (i = 0; i < _EmailsChangedNodes.length; i++)
	{
		_EmailsChangedItem = deserializeNodeEmailChange(_EmailsChangedNodes[i]);
			result.EmailsChanged.push(_EmailsChangedItem);
	}						
}
else{
	result.EmailsChanged = null;
}
var _FoldersChangedNodes = node.getElementsByTagName("FoldersChanged");
if (_FoldersChangedNodes && _FoldersChangedNodes.length > 0) {
	result.FoldersChanged = deserializeNodeSubFolderChange(_FoldersChangedNodes[0]);
}
else{
	result.FoldersChanged = null;
}
result.SyncFailedItems = [];
var _SyncFailedItemsCollectionNode = node.getElementsByTagName("SyncFailedItems");
if (_SyncFailedItemsCollectionNode != null && _SyncFailedItemsCollectionNode.length > 0) {
	var _SyncFailedItemsNodes = _SyncFailedItemsCollectionNode[0].getElementsByTagName("String");
	var _SyncFailedItemsItem;	
	for (i = 0; i < _SyncFailedItemsNodes.length; i++)
	{
		_SyncFailedItemsItem = deserializeNodeString(_SyncFailedItemsNodes[i]);
			result.SyncFailedItems.push(_SyncFailedItemsItem);
	}						
}
else{
	result.SyncFailedItems = null;
}
result.HasData = node.getElementsByTagName("HasData")[0].textContent;
			return result;
		}

		function deserializeNodeEmailChange(node) {				
				var result = {};
			result.FolderId = parseInt(node.getElementsByTagName("FolderId")[0].textContent);
result.Create = [];
var _CreateCollectionNode = node.getElementsByTagName("Create");
if (_CreateCollectionNode != null && _CreateCollectionNode.length > 0) {
	var _CreateNodes = _CreateCollectionNode[0].getElementsByTagName("EmailDmsViewDto");
	var _CreateItem;	
	for (i = 0; i < _CreateNodes.length; i++)
	{
		_CreateItem = deserializeNodeEmailDmsViewDto(_CreateNodes[i]);
			result.Create.push(_CreateItem);
	}						
}
else{
	result.Create = null;
}
result.Update = [];
var _UpdateCollectionNode = node.getElementsByTagName("Update");
if (_UpdateCollectionNode != null && _UpdateCollectionNode.length > 0) {
	var _UpdateNodes = _UpdateCollectionNode[0].getElementsByTagName("EmailDmsViewDto");
	var _UpdateItem;	
	for (i = 0; i < _UpdateNodes.length; i++)
	{
		_UpdateItem = deserializeNodeEmailDmsViewDto(_UpdateNodes[i]);
			result.Update.push(_UpdateItem);
	}						
}
else{
	result.Update = null;
}
result.IsReadFlagChanged = [];
var _IsReadFlagChangedCollectionNode = node.getElementsByTagName("IsReadFlagChanged");
if (_IsReadFlagChangedCollectionNode != null && _IsReadFlagChangedCollectionNode.length > 0) {
	var _IsReadFlagChangedNodes = _IsReadFlagChangedCollectionNode[0].getElementsByTagName("ReadFlagChanged");
	var _IsReadFlagChangedItem;	
	for (i = 0; i < _IsReadFlagChangedNodes.length; i++)
	{
		_IsReadFlagChangedItem = deserializeNodeReadFlagChanged(_IsReadFlagChangedNodes[i]);
			result.IsReadFlagChanged.push(_IsReadFlagChangedItem);
	}						
}
else{
	result.IsReadFlagChanged = null;
}
result.Delete = [];
var _DeleteCollectionNode = node.getElementsByTagName("Delete");
if (_DeleteCollectionNode != null && _DeleteCollectionNode.length > 0) {
	var _DeleteNodes = _DeleteCollectionNode[0].getElementsByTagName("Int32");
	var _DeleteItem;	
	for (i = 0; i < _DeleteNodes.length; i++)
	{
		_DeleteItem = deserializeNodeInt32(_DeleteNodes[i]);
			result.Delete.push(_DeleteItem);
	}						
}
else{
	result.Delete = null;
}
result.IsInbox = node.getElementsByTagName("IsInbox")[0].textContent;
result.HasData = node.getElementsByTagName("HasData")[0].textContent;
			return result;
		}

		function deserializeNodeReadFlagChanged(node) {				
				var result = {};
			result.EmailId = parseInt(node.getElementsByTagName("EmailId")[0].textContent);
result.IsRead = node.getElementsByTagName("IsRead")[0].textContent;
			return result;
		}

		function deserializeNodeSubFolderChange(node) {				
				var result = {};
			result.Create = [];
var _CreateCollectionNode = node.getElementsByTagName("Create");
if (_CreateCollectionNode != null && _CreateCollectionNode.length > 0) {
	var _CreateNodes = _CreateCollectionNode[0].getElementsByTagName("FolderDto");
	var _CreateItem;	
	for (i = 0; i < _CreateNodes.length; i++)
	{
		_CreateItem = deserializeNodeFolderDto(_CreateNodes[i]);
			result.Create.push(_CreateItem);
	}						
}
else{
	result.Create = null;
}
result.Update = [];
var _UpdateCollectionNode = node.getElementsByTagName("Update");
if (_UpdateCollectionNode != null && _UpdateCollectionNode.length > 0) {
	var _UpdateNodes = _UpdateCollectionNode[0].getElementsByTagName("FolderDto");
	var _UpdateItem;	
	for (i = 0; i < _UpdateNodes.length; i++)
	{
		_UpdateItem = deserializeNodeFolderDto(_UpdateNodes[i]);
			result.Update.push(_UpdateItem);
	}						
}
else{
	result.Update = null;
}
result.Delete = [];
var _DeleteCollectionNode = node.getElementsByTagName("Delete");
if (_DeleteCollectionNode != null && _DeleteCollectionNode.length > 0) {
	var _DeleteNodes = _DeleteCollectionNode[0].getElementsByTagName("Int32");
	var _DeleteItem;	
	for (i = 0; i < _DeleteNodes.length; i++)
	{
		_DeleteItem = deserializeNodeInt32(_DeleteNodes[i]);
			result.Delete.push(_DeleteItem);
	}						
}
else{
	result.Delete = null;
}
result.HasData = node.getElementsByTagName("HasData")[0].textContent;
			return result;
		}

		function deserializeNodeEntityLink(node) {				
				var result = {};
			result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
result.EntityId = parseInt(node.getElementsByTagName("EntityId")[0].textContent);
			return result;
		}

		function deserializeNodeEntityViewDataRow(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.EntityName = node.getElementsByTagName("EntityName")[0].textContent;
result.IsCheckedOut = node.getElementsByTagName("IsCheckedOut")[0].textContent;
result.Columns = [];
var _ColumnsCollectionNode = node.getElementsByTagName("Columns");
if (_ColumnsCollectionNode != null && _ColumnsCollectionNode.length > 0) {
	var _ColumnsNodes = _ColumnsCollectionNode[0].getElementsByTagName("EntityOverviewColumnDto");
	var _ColumnsItem;	
	for (i = 0; i < _ColumnsNodes.length; i++)
	{
		_ColumnsItem = deserializeNodeEntityOverviewColumnDto(_ColumnsNodes[i]);
			result.Columns.push(_ColumnsItem);
	}						
}
else{
	result.Columns = null;
}
result.Values = [];
var _ValuesCollectionNode = node.getElementsByTagName("Values");
if (_ValuesCollectionNode != null && _ValuesCollectionNode.length > 0) {
	var _ValuesNodes = _ValuesCollectionNode[0].getElementsByTagName("Object");
	var _ValuesItem;	
	for (i = 0; i < _ValuesNodes.length; i++)
	{
		_ValuesItem = deserializeNodeObject(_ValuesNodes[i]);
			result.Values.push(_ValuesItem);
	}						
}
else{
	result.Values = null;
}
result.OpenDate = node.getElementsByTagName("OpenDate")[0].textContent;
result.OpenedBy = node.getElementsByTagName("OpenedBy")[0].textContent;
			return result;
		}

		function deserializeNodeSaveExportSettingsRequest(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.TemplateFileId = node.getElementsByTagName("TemplateFileId")[0].textContent;
result.OutputFolderId = node.getElementsByTagName("OutputFolderId")[0].textContent;
result.OutputName = node.getElementsByTagName("OutputName")[0].textContent;
			return result;
		}

		function deserializeNodeLoadEntityRequest(node) {				
				var result = {};
			result.EntityId = parseInt(node.getElementsByTagName("EntityId")[0].textContent);
result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.MembersToLoad = [];
var _MembersToLoadCollectionNode = node.getElementsByTagName("MembersToLoad");
if (_MembersToLoadCollectionNode != null && _MembersToLoadCollectionNode.length > 0) {
	var _MembersToLoadNodes = _MembersToLoadCollectionNode[0].getElementsByTagName("MemberAccessPath");
	var _MembersToLoadItem;	
	for (i = 0; i < _MembersToLoadNodes.length; i++)
	{
		_MembersToLoadItem = deserializeNodeMemberAccessPath(_MembersToLoadNodes[i]);
			result.MembersToLoad.push(_MembersToLoadItem);
	}						
}
else{
	result.MembersToLoad = null;
}
			return result;
		}

		function deserializeNodeItemsControlTypes(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeEntityPropertyDto(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
result.IsRequired = node.getElementsByTagName("IsRequired")[0].textContent;
result.RelatedEntities = [];
var _RelatedEntitiesCollectionNode = node.getElementsByTagName("RelatedEntities");
if (_RelatedEntitiesCollectionNode != null && _RelatedEntitiesCollectionNode.length > 0) {
	var _RelatedEntitiesNodes = _RelatedEntitiesCollectionNode[0].getElementsByTagName("EntityDto");
	var _RelatedEntitiesItem;	
	for (i = 0; i < _RelatedEntitiesNodes.length; i++)
	{
		_RelatedEntitiesItem = deserializeNodeEntityDto(_RelatedEntitiesNodes[i]);
			result.RelatedEntities.push(_RelatedEntitiesItem);
	}						
}
else{
	result.RelatedEntities = null;
}
result.RelationType = node.getElementsByTagName("RelationType")[0].textContent;
result.ControlType = node.getElementsByTagName("ControlType")[0].textContent;
			return result;
		}

		function deserializeNodeFolderLinkSettingsDto(node) {				
				var result = {};
			result.FolderNameGenerationFieldNames = [];
var _FolderNameGenerationFieldNamesCollectionNode = node.getElementsByTagName("FolderNameGenerationFieldNames");
if (_FolderNameGenerationFieldNamesCollectionNode != null && _FolderNameGenerationFieldNamesCollectionNode.length > 0) {
	var _FolderNameGenerationFieldNamesNodes = _FolderNameGenerationFieldNamesCollectionNode[0].getElementsByTagName("String");
	var _FolderNameGenerationFieldNamesItem;	
	for (i = 0; i < _FolderNameGenerationFieldNamesNodes.length; i++)
	{
		_FolderNameGenerationFieldNamesItem = deserializeNodeString(_FolderNameGenerationFieldNamesNodes[i]);
			result.FolderNameGenerationFieldNames.push(_FolderNameGenerationFieldNamesItem);
	}						
}
else{
	result.FolderNameGenerationFieldNames = null;
}
result.PathTemplate = node.getElementsByTagName("PathTemplate")[0].textContent;
result.IsAutocreateFolderEnabled = node.getElementsByTagName("IsAutocreateFolderEnabled")[0].textContent;
			return result;
		}

		function deserializeNodeDateFieldDefaultValueModel(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeCalendarDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Appointments = [];
var _AppointmentsCollectionNode = node.getElementsByTagName("Appointments");
if (_AppointmentsCollectionNode != null && _AppointmentsCollectionNode.length > 0) {
	var _AppointmentsNodes = _AppointmentsCollectionNode[0].getElementsByTagName("SingleAppointmentDto");
	var _AppointmentsItem;	
	for (i = 0; i < _AppointmentsNodes.length; i++)
	{
		_AppointmentsItem = deserializeNodeSingleAppointmentDto(_AppointmentsNodes[i]);
			result.Appointments.push(_AppointmentsItem);
	}						
}
else{
	result.Appointments = null;
}
var _OwnerNodes = node.getElementsByTagName("Owner");
if (_OwnerNodes && _OwnerNodes.length > 0) {
	result.Owner = deserializeNodeUser(_OwnerNodes[0]);
}
else{
	result.Owner = null;
}
result.Categories = [];
var _CategoriesCollectionNode = node.getElementsByTagName("Categories");
if (_CategoriesCollectionNode != null && _CategoriesCollectionNode.length > 0) {
	var _CategoriesNodes = _CategoriesCollectionNode[0].getElementsByTagName("AppointmentCategoryDto");
	var _CategoriesItem;	
	for (i = 0; i < _CategoriesNodes.length; i++)
	{
		_CategoriesItem = deserializeNodeAppointmentCategoryDto(_CategoriesNodes[i]);
			result.Categories.push(_CategoriesItem);
	}						
}
else{
	result.Categories = null;
}
result.TimerulerMajorTickStringFormat = node.getElementsByTagName("TimerulerMajorTickStringFormat")[0].textContent;
			return result;
		}

		function deserializeNodeAppointmentInviteeDto(node) {				
				var result = {};
			result.AppointmentId = parseInt(node.getElementsByTagName("AppointmentId")[0].textContent);
result.UserId = node.getElementsByTagName("UserId")[0].textContent;
result.GroupId = node.getElementsByTagName("GroupId")[0].textContent;
result.DisplayName = node.getElementsByTagName("DisplayName")[0].textContent;
result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
			return result;
		}

		function deserializeNodeCreateEntityRowFieldBinding(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
var _EntityFieldNodes = node.getElementsByTagName("EntityField");
if (_EntityFieldNodes && _EntityFieldNodes.length > 0) {
	result.EntityField = deserializeNodeEntityFieldDto(_EntityFieldNodes[0]);
}
else{
	result.EntityField = null;
}
var _FieldValueNodes = node.getElementsByTagName("FieldValue");
if (_FieldValueNodes && _FieldValueNodes.length > 0) {
	result.FieldValue = deserializeNodeEntityOverviewColumnDto(_FieldValueNodes[0]);
}
else{
	result.FieldValue = null;
}
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeGetEntityTypesInfo(node) {				
				var result = {};
			result.BranchId = node.getElementsByTagName("BranchId")[0].textContent;
result.LanguageId = parseInt(node.getElementsByTagName("LanguageId")[0].textContent);
			return result;
		}

		function deserializeNodeEntityTypeChangesSubscriptionDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
var _ChangesNodes = node.getElementsByTagName("Changes");
if (_ChangesNodes && _ChangesNodes.length > 0) {
	result.Changes = deserializeNodeChangesType(_ChangesNodes[0]);
}
else{
	result.Changes = null;
}
			return result;
		}

		function deserializeNodeUserCredentials(node) {				
				var result = {};
			result.ClientName = node.getElementsByTagName("ClientName")[0].textContent;
result.UserName = node.getElementsByTagName("UserName")[0].textContent;
result.Token = node.getElementsByTagName("Token")[0].textContent;
result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.Password = node.getElementsByTagName("Password")[0].textContent;
result.UsedForService = node.getElementsByTagName("UsedForService")[0].textContent;
			return result;
		}

		function deserializeNodeSecurityObjectRequestParameter(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Type = node.getElementsByTagName("Type")[0].textContent;
result.UserGroupPermissions = [];
var _UserGroupPermissionsCollectionNode = node.getElementsByTagName("UserGroupPermissions");
if (_UserGroupPermissionsCollectionNode != null && _UserGroupPermissionsCollectionNode.length > 0) {
	var _UserGroupPermissionsNodes = _UserGroupPermissionsCollectionNode[0].getElementsByTagName("UserGroupPermissions");
	var _UserGroupPermissionsItem;	
	for (i = 0; i < _UserGroupPermissionsNodes.length; i++)
	{
		_UserGroupPermissionsItem = deserializeNodeUserGroupPermissions(_UserGroupPermissionsNodes[i]);
			result.UserGroupPermissions.push(_UserGroupPermissionsItem);
	}						
}
else{
	result.UserGroupPermissions = null;
}
			return result;
		}

		function deserializeNodeRole(node) {				
				var result = {};
			result.Permissions = node.getElementsByTagName("Permissions")[0].textContent;
var _ReaderNodes = node.getElementsByTagName("Reader");
if (_ReaderNodes && _ReaderNodes.length > 0) {
	result.Reader = deserializeNodeRole(_ReaderNodes[0]);
}
else{
	result.Reader = null;
}
var _ContributorNodes = node.getElementsByTagName("Contributor");
if (_ContributorNodes && _ContributorNodes.length > 0) {
	result.Contributor = deserializeNodeRole(_ContributorNodes[0]);
}
else{
	result.Contributor = null;
}
var _EditorNodes = node.getElementsByTagName("Editor");
if (_EditorNodes && _EditorNodes.length > 0) {
	result.Editor = deserializeNodeRole(_EditorNodes[0]);
}
else{
	result.Editor = null;
}
var _OwnerNodes = node.getElementsByTagName("Owner");
if (_OwnerNodes && _OwnerNodes.length > 0) {
	result.Owner = deserializeNodeRole(_OwnerNodes[0]);
}
else{
	result.Owner = null;
}
			return result;
		}

		function deserializeNodeEntitiesSearchResult(node) {				
				var result = {};
			result.EntityTypeResults = [];
var _EntityTypeResultsCollectionNode = node.getElementsByTagName("EntityTypeResults");
if (_EntityTypeResultsCollectionNode != null && _EntityTypeResultsCollectionNode.length > 0) {
	var _EntityTypeResultsNodes = _EntityTypeResultsCollectionNode[0].getElementsByTagName("EntityOverviewGridData");
	var _EntityTypeResultsItem;	
	for (i = 0; i < _EntityTypeResultsNodes.length; i++)
	{
		_EntityTypeResultsItem = deserializeNodeEntityOverviewGridData(_EntityTypeResultsNodes[i]);
			result.EntityTypeResults.push(_EntityTypeResultsItem);
	}						
}
else{
	result.EntityTypeResults = null;
}
			return result;
		}

		function deserializeNodeFileCheckOutDto(node) {				
				var result = {};
			result.FileId = parseInt(node.getElementsByTagName("FileId")[0].textContent);
result.CheckOutTime = new Date(Date.parse(node.getElementsByTagName("CheckOutTime")[0].textContent));
			return result;
		}

		function deserializeNodeFormulaToExpressionConverter(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeArithmeticExpressionConverter(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeMultipleValueConstantExpression(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeLogicalNotExpression(node) {				
				var result = {};
			var _OperandNodes = node.getElementsByTagName("Operand");
if (_OperandNodes && _OperandNodes.length > 0) {
	result.Operand = deserializeNodePredicateExpression(_OperandNodes[0]);
}
else{
	result.Operand = null;
}
			return result;
		}

		function deserializeNodeDivideExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodeSingleValueExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodeSingleValueExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeSaveEntitiesRequest(node) {				
				var result = {};
			result.SaveRequests = [];
var _SaveRequestsCollectionNode = node.getElementsByTagName("SaveRequests");
if (_SaveRequestsCollectionNode != null && _SaveRequestsCollectionNode.length > 0) {
	var _SaveRequestsNodes = _SaveRequestsCollectionNode[0].getElementsByTagName("SaveEntityRequest");
	var _SaveRequestsItem;	
	for (i = 0; i < _SaveRequestsNodes.length; i++)
	{
		_SaveRequestsItem = deserializeNodeSaveEntityRequest(_SaveRequestsNodes[i]);
			result.SaveRequests.push(_SaveRequestsItem);
	}						
}
else{
	result.SaveRequests = null;
}
			return result;
		}

		function deserializeNodeCollectionEntityPropertyValue(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.RelatedEntityIds = [];
var _RelatedEntityIdsCollectionNode = node.getElementsByTagName("RelatedEntityIds");
if (_RelatedEntityIdsCollectionNode != null && _RelatedEntityIdsCollectionNode.length > 0) {
	var _RelatedEntityIdsNodes = _RelatedEntityIdsCollectionNode[0].getElementsByTagName("Int32");
	var _RelatedEntityIdsItem;	
	for (i = 0; i < _RelatedEntityIdsNodes.length; i++)
	{
		_RelatedEntityIdsItem = deserializeNodeInt32(_RelatedEntityIdsNodes[i]);
			result.RelatedEntityIds.push(_RelatedEntityIdsItem);
	}						
}
else{
	result.RelatedEntityIds = null;
}
			return result;
		}

		function deserializeNodeValuesListModel(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Items = [];
var _ItemsCollectionNode = node.getElementsByTagName("Items");
if (_ItemsCollectionNode != null && _ItemsCollectionNode.length > 0) {
	var _ItemsNodes = _ItemsCollectionNode[0].getElementsByTagName("ValueItemModel");
	var _ItemsItem;	
	for (i = 0; i < _ItemsNodes.length; i++)
	{
		_ItemsItem = deserializeNodeValueItemModel(_ItemsNodes[i]);
			result.Items.push(_ItemsItem);
	}						
}
else{
	result.Items = null;
}
result.IsListOfFlags = node.getElementsByTagName("IsListOfFlags")[0].textContent;
			return result;
		}

		function deserializeNodeEntityDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.OpenedBy = node.getElementsByTagName("OpenedBy")[0].textContent;
result.OpenedById = node.getElementsByTagName("OpenedById")[0].textContent;
result.OpenDate = node.getElementsByTagName("OpenDate")[0].textContent;
result.DisplayMemberPath = node.getElementsByTagName("DisplayMemberPath")[0].textContent;
result.IsNewUnsavedEntity = node.getElementsByTagName("IsNewUnsavedEntity")[0].textContent;
			return result;
		}

		function deserializeNodeEntityOverviewColumnDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Title = node.getElementsByTagName("Title")[0].textContent;
result.OrderNumber = parseInt(node.getElementsByTagName("OrderNumber")[0].textContent);
result.IsOverview = node.getElementsByTagName("IsOverview")[0].textContent;
result.IsOverviewInEditMode = node.getElementsByTagName("IsOverviewInEditMode")[0].textContent;
var _FormulaNodes = node.getElementsByTagName("Formula");
if (_FormulaNodes && _FormulaNodes.length > 0) {
	result.Formula = deserializeNodeFormulaDto(_FormulaNodes[0]);
}
else{
	result.Formula = null;
}
var _EntityOverviewNodes = node.getElementsByTagName("EntityOverview");
if (_EntityOverviewNodes && _EntityOverviewNodes.length > 0) {
	result.EntityOverview = deserializeNodeEntityOverviewDto(_EntityOverviewNodes[0]);
}
else{
	result.EntityOverview = null;
}
result.Type = node.getElementsByTagName("Type")[0].textContent;
			return result;
		}

		function deserializeNodeFlatFieldsSettingsDto(node) {				
				var result = {};
			var _AutoNumberSettingsNodes = node.getElementsByTagName("AutoNumberSettings");
if (_AutoNumberSettingsNodes && _AutoNumberSettingsNodes.length > 0) {
	result.AutoNumberSettings = deserializeNodeAutoNumbersFieldSettings(_AutoNumberSettingsNodes[0]);
}
else{
	result.AutoNumberSettings = null;
}
result.FolderId = node.getElementsByTagName("FolderId")[0].textContent;
result.NumbersQuantityAfterPoint = node.getElementsByTagName("NumbersQuantityAfterPoint")[0].textContent;
result.TextBoxLinesQuantity = node.getElementsByTagName("TextBoxLinesQuantity")[0].textContent;
var _ValuesListNodes = node.getElementsByTagName("ValuesList");
if (_ValuesListNodes && _ValuesListNodes.length > 0) {
	result.ValuesList = deserializeNodeValuesListModel(_ValuesListNodes[0]);
}
else{
	result.ValuesList = null;
}
var _DynamicDefaultValueSettingsNodes = node.getElementsByTagName("DynamicDefaultValueSettings");
if (_DynamicDefaultValueSettingsNodes && _DynamicDefaultValueSettingsNodes.length > 0) {
	result.DynamicDefaultValueSettings = deserializeNodeDynamicDefaultValueSettingsDto(_DynamicDefaultValueSettingsNodes[0]);
}
else{
	result.DynamicDefaultValueSettings = null;
}
result.DateControlMode = node.getElementsByTagName("DateControlMode")[0].textContent;
			return result;
		}

		function deserializeNodeFieldRelationSettingsDto(node) {				
				var result = {};
			result.RelationshipEntityTypeId = parseInt(node.getElementsByTagName("RelationshipEntityTypeId")[0].textContent);
var _RelationshipEntityTypeNodes = node.getElementsByTagName("RelationshipEntityType");
if (_RelationshipEntityTypeNodes && _RelationshipEntityTypeNodes.length > 0) {
	result.RelationshipEntityType = deserializeNodeEntityTypeDto(_RelationshipEntityTypeNodes[0]);
}
else{
	result.RelationshipEntityType = null;
}
result.EntityCollectionType = node.getElementsByTagName("EntityCollectionType")[0].textContent;
result.RelationType = node.getElementsByTagName("RelationType")[0].textContent;
result.InverseEndFieldId = parseInt(node.getElementsByTagName("InverseEndFieldId")[0].textContent);
result.InverseEndFieldName = node.getElementsByTagName("InverseEndFieldName")[0].textContent;
result.CreateInverseEnd = node.getElementsByTagName("CreateInverseEnd")[0].textContent;
result.IsOverviewGridActive = node.getElementsByTagName("IsOverviewGridActive")[0].textContent;
result.LookupFields = [];
var _LookupFieldsCollectionNode = node.getElementsByTagName("LookupFields");
if (_LookupFieldsCollectionNode != null && _LookupFieldsCollectionNode.length > 0) {
	var _LookupFieldsNodes = _LookupFieldsCollectionNode[0].getElementsByTagName("Int32");
	var _LookupFieldsItem;	
	for (i = 0; i < _LookupFieldsNodes.length; i++)
	{
		_LookupFieldsItem = deserializeNodeInt32(_LookupFieldsNodes[i]);
			result.LookupFields.push(_LookupFieldsItem);
	}						
}
else{
	result.LookupFields = null;
}
result.CanUserCreateParent = node.getElementsByTagName("CanUserCreateParent")[0].textContent;
result.LookupFieldsSeparator = node.getElementsByTagName("LookupFieldsSeparator")[0].textContent;
var _ParentFilterNodes = node.getElementsByTagName("ParentFilter");
if (_ParentFilterNodes && _ParentFilterNodes.length > 0) {
	result.ParentFilter = deserializeNodeParentFieldFilterSettings(_ParentFilterNodes[0]);
}
else{
	result.ParentFilter = null;
}
			return result;
		}

		function deserializeNodeValidationKeySettingsDto(node) {				
				var result = {};
			result.SendByEmail = node.getElementsByTagName("SendByEmail")[0].textContent;
result.SendBySMS = node.getElementsByTagName("SendBySMS")[0].textContent;
var _PolicyNodes = node.getElementsByTagName("Policy");
if (_PolicyNodes && _PolicyNodes.length > 0) {
	result.Policy = deserializeNodeValidationKeyPolicySettingsDto(_PolicyNodes[0]);
}
else{
	result.Policy = null;
}
			return result;
		}

		function deserializeNodeAppointmentRecurrenceDto(node) {				
				var result = {};
			result.DayOfMonth = node.getElementsByTagName("DayOfMonth")[0].textContent;
result.DayOrdinal = node.getElementsByTagName("DayOrdinal")[0].textContent;
result.DaysOfWeekMask = parseInt(node.getElementsByTagName("DaysOfWeekMask")[0].textContent);
result.FirstDayOfWeek = node.getElementsByTagName("FirstDayOfWeek")[0].textContent;
result.Frequency = parseInt(node.getElementsByTagName("Frequency")[0].textContent);
result.Interval = parseInt(node.getElementsByTagName("Interval")[0].textContent);
result.MaxOccurrences = node.getElementsByTagName("MaxOccurrences")[0].textContent;
result.MonthOfYear = node.getElementsByTagName("MonthOfYear")[0].textContent;
result.RecursUntil = node.getElementsByTagName("RecursUntil")[0].textContent;
result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.RecurrenceExceptions = [];
var _RecurrenceExceptionsCollectionNode = node.getElementsByTagName("RecurrenceExceptions");
if (_RecurrenceExceptionsCollectionNode != null && _RecurrenceExceptionsCollectionNode.length > 0) {
	var _RecurrenceExceptionsNodes = _RecurrenceExceptionsCollectionNode[0].getElementsByTagName("RecurrenceExceptionDto");
	var _RecurrenceExceptionsItem;	
	for (i = 0; i < _RecurrenceExceptionsNodes.length; i++)
	{
		_RecurrenceExceptionsItem = deserializeNodeRecurrenceExceptionDto(_RecurrenceExceptionsNodes[i]);
			result.RecurrenceExceptions.push(_RecurrenceExceptionsItem);
	}						
}
else{
	result.RecurrenceExceptions = null;
}
			return result;
		}

		function deserializeNodeAppointmentRecipientDto(node) {				
				var result = {};
			result.UserId = node.getElementsByTagName("UserId")[0].textContent;
result.GroupId = node.getElementsByTagName("GroupId")[0].textContent;
result.DisplayName = node.getElementsByTagName("DisplayName")[0].textContent;
			return result;
		}

		function deserializeNodeWorkspaceSettinsgsForUserDto(node) {				
				var result = {};
			result.ID = parseInt(node.getElementsByTagName("ID")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Settings = node.getElementsByTagName("Settings")[0].textContent;
result.Users = [];
var _UsersCollectionNode = node.getElementsByTagName("Users");
if (_UsersCollectionNode != null && _UsersCollectionNode.length > 0) {
	var _UsersNodes = _UsersCollectionNode[0].getElementsByTagName("User");
	var _UsersItem;	
	for (i = 0; i < _UsersNodes.length; i++)
	{
		_UsersItem = deserializeNodeUser(_UsersNodes[i]);
			result.Users.push(_UsersItem);
	}						
}
else{
	result.Users = null;
}
result.Groups = [];
var _GroupsCollectionNode = node.getElementsByTagName("Groups");
if (_GroupsCollectionNode != null && _GroupsCollectionNode.length > 0) {
	var _GroupsNodes = _GroupsCollectionNode[0].getElementsByTagName("UserGroupDto");
	var _GroupsItem;	
	for (i = 0; i < _GroupsNodes.length; i++)
	{
		_GroupsItem = deserializeNodeUserGroupDto(_GroupsNodes[i]);
			result.Groups.push(_GroupsItem);
	}						
}
else{
	result.Groups = null;
}
			return result;
		}

		function deserializeNodeFieldOrConstantValue(node) {				
				var result = {};
			var _EntityFieldNodes = node.getElementsByTagName("EntityField");
if (_EntityFieldNodes && _EntityFieldNodes.length > 0) {
	result.EntityField = deserializeNodeEntityFieldDto(_EntityFieldNodes[0]);
}
else{
	result.EntityField = null;
}
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeCreateUserGroupDto(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Description = node.getElementsByTagName("Description")[0].textContent;
result.Workspaces = [];
var _WorkspacesCollectionNode = node.getElementsByTagName("Workspaces");
if (_WorkspacesCollectionNode != null && _WorkspacesCollectionNode.length > 0) {
	var _WorkspacesNodes = _WorkspacesCollectionNode[0].getElementsByTagName("WorkspaceSettingsDto");
	var _WorkspacesItem;	
	for (i = 0; i < _WorkspacesNodes.length; i++)
	{
		_WorkspacesItem = deserializeNodeWorkspaceSettingsDto(_WorkspacesNodes[i]);
			result.Workspaces.push(_WorkspacesItem);
	}						
}
else{
	result.Workspaces = null;
}
			return result;
		}

		function deserializeNodeRootFolderWithContent(node) {				
				var result = {};
			var _RootFolderNodes = node.getElementsByTagName("RootFolder");
if (_RootFolderNodes && _RootFolderNodes.length > 0) {
	result.RootFolder = deserializeNodeFolderDto(_RootFolderNodes[0]);
}
else{
	result.RootFolder = null;
}
result.SubFolders = [];
var _SubFoldersCollectionNode = node.getElementsByTagName("SubFolders");
if (_SubFoldersCollectionNode != null && _SubFoldersCollectionNode.length > 0) {
	var _SubFoldersNodes = _SubFoldersCollectionNode[0].getElementsByTagName("FolderDto");
	var _SubFoldersItem;	
	for (i = 0; i < _SubFoldersNodes.length; i++)
	{
		_SubFoldersItem = deserializeNodeFolderDto(_SubFoldersNodes[i]);
			result.SubFolders.push(_SubFoldersItem);
	}						
}
else{
	result.SubFolders = null;
}
result.SubFiles = [];
var _SubFilesCollectionNode = node.getElementsByTagName("SubFiles");
if (_SubFilesCollectionNode != null && _SubFilesCollectionNode.length > 0) {
	var _SubFilesNodes = _SubFilesCollectionNode[0].getElementsByTagName("FileDto");
	var _SubFilesItem;	
	for (i = 0; i < _SubFilesNodes.length; i++)
	{
		_SubFilesItem = deserializeNodeFileDto(_SubFilesNodes[i]);
			result.SubFiles.push(_SubFilesItem);
	}						
}
else{
	result.SubFiles = null;
}
			return result;
		}

		function deserializeNodeFolderDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
var _ParentFolderNodes = node.getElementsByTagName("ParentFolder");
if (_ParentFolderNodes && _ParentFolderNodes.length > 0) {
	result.ParentFolder = deserializeNodeFolderDto(_ParentFolderNodes[0]);
}
else{
	result.ParentFolder = null;
}
result.Name = node.getElementsByTagName("Name")[0].textContent;
var _CreatorNodes = node.getElementsByTagName("Creator");
if (_CreatorNodes && _CreatorNodes.length > 0) {
	result.Creator = deserializeNodeFolderCreator(_CreatorNodes[0]);
}
else{
	result.Creator = null;
}
result.PrivateIntern = node.getElementsByTagName("PrivateIntern")[0].textContent;
result.PublicInternet = node.getElementsByTagName("PublicInternet")[0].textContent;
result.Permissions = node.getElementsByTagName("Permissions")[0].textContent;
result.FullPath = node.getElementsByTagName("FullPath")[0].textContent;
result.Attributes = node.getElementsByTagName("Attributes")[0].textContent;
result.IsHidden = node.getElementsByTagName("IsHidden")[0].textContent;
result.IsRoot = node.getElementsByTagName("IsRoot")[0].textContent;
result.IsExchangeRootFolder = node.getElementsByTagName("IsExchangeRootFolder")[0].textContent;
result.IsExchange = node.getElementsByTagName("IsExchange")[0].textContent;
result.IsLinkedToEntity = node.getElementsByTagName("IsLinkedToEntity")[0].textContent;
result.IsExhangeFolder = node.getElementsByTagName("IsExhangeFolder")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.CreateDate = new Date(Date.parse(node.getElementsByTagName("CreateDate")[0].textContent));
result.ChangeDate = new Date(Date.parse(node.getElementsByTagName("ChangeDate")[0].textContent));
result.ExcahngeFolderAttribute = node.getElementsByTagName("ExcahngeFolderAttribute")[0].textContent;
			return result;
		}

		function deserializeNodeRecipientsDto(node) {				
				var result = {};
			result.Users = [];
var _UsersCollectionNode = node.getElementsByTagName("Users");
if (_UsersCollectionNode != null && _UsersCollectionNode.length > 0) {
	var _UsersNodes = _UsersCollectionNode[0].getElementsByTagName("UserRecipientDto");
	var _UsersItem;	
	for (i = 0; i < _UsersNodes.length; i++)
	{
		_UsersItem = deserializeNodeUserRecipientDto(_UsersNodes[i]);
			result.Users.push(_UsersItem);
	}						
}
else{
	result.Users = null;
}
result.Entitys = [];
var _EntitysCollectionNode = node.getElementsByTagName("Entitys");
if (_EntitysCollectionNode != null && _EntitysCollectionNode.length > 0) {
	var _EntitysNodes = _EntitysCollectionNode[0].getElementsByTagName("EntityTypeDto");
	var _EntitysItem;	
	for (i = 0; i < _EntitysNodes.length; i++)
	{
		_EntitysItem = deserializeNodeEntityTypeDto(_EntitysNodes[i]);
			result.Entitys.push(_EntitysItem);
	}						
}
else{
	result.Entitys = null;
}
			return result;
		}

		function deserializeNodeEmailForwardDto(node) {				
				var result = {};
			result.ExchangeId = node.getElementsByTagName("ExchangeId")[0].textContent;
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.Body = node.getElementsByTagName("Body")[0].textContent;
result.EmailAttachments = [];
var _EmailAttachmentsCollectionNode = node.getElementsByTagName("EmailAttachments");
if (_EmailAttachmentsCollectionNode != null && _EmailAttachmentsCollectionNode.length > 0) {
	var _EmailAttachmentsNodes = _EmailAttachmentsCollectionNode[0].getElementsByTagName("EmailAttachmentInfo");
	var _EmailAttachmentsItem;	
	for (i = 0; i < _EmailAttachmentsNodes.length; i++)
	{
		_EmailAttachmentsItem = deserializeNodeEmailAttachmentInfo(_EmailAttachmentsNodes[i]);
			result.EmailAttachments.push(_EmailAttachmentsItem);
	}						
}
else{
	result.EmailAttachments = null;
}
			return result;
		}

		function deserializeNodeGetOverviewsRequest(node) {				
				var result = {};
			result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
result.ExcludeUserOverviews = node.getElementsByTagName("ExcludeUserOverviews")[0].textContent;
			return result;
		}

		function deserializeNodeChildOverviewSpecification(node) {				
				var result = {};
			result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
result.ChildEntities = [];
var _ChildEntitiesCollectionNode = node.getElementsByTagName("ChildEntities");
if (_ChildEntitiesCollectionNode != null && _ChildEntitiesCollectionNode.length > 0) {
	var _ChildEntitiesNodes = _ChildEntitiesCollectionNode[0].getElementsByTagName("EntityDto");
	var _ChildEntitiesItem;	
	for (i = 0; i < _ChildEntitiesNodes.length; i++)
	{
		_ChildEntitiesItem = deserializeNodeEntityDto(_ChildEntitiesNodes[i]);
			result.ChildEntities.push(_ChildEntitiesItem);
	}						
}
else{
	result.ChildEntities = null;
}
			return result;
		}

		function deserializeNodeReferenceEntityPropertyValue(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.RelatedEntityId = node.getElementsByTagName("RelatedEntityId")[0].textContent;
			return result;
		}

		function deserializeNodeEntityTypeForInput(node) {				
				var result = {};
			var _EntityTypeNodes = node.getElementsByTagName("EntityType");
if (_EntityTypeNodes && _EntityTypeNodes.length > 0) {
	result.EntityType = deserializeNodeEntityTypeDto(_EntityTypeNodes[0]);
}
else{
	result.EntityType = null;
}
var _FormNodes = node.getElementsByTagName("Form");
if (_FormNodes && _FormNodes.length > 0) {
	result.Form = deserializeNodeEntityFormDto(_FormNodes[0]);
}
else{
	result.Form = null;
}
			return result;
		}

		function deserializeNodeInputFormData(node) {				
				var result = {};
			var _EntityNodes = node.getElementsByTagName("Entity");
if (_EntityNodes && _EntityNodes.length > 0) {
	result.Entity = deserializeNodeEntitySerializationPackage(_EntityNodes[0]);
}
else{
	result.Entity = null;
}
var _FormNodes = node.getElementsByTagName("Form");
if (_FormNodes && _FormNodes.length > 0) {
	result.Form = deserializeNodeEntityFormDto(_FormNodes[0]);
}
else{
	result.Form = null;
}
result.ChildGridsData = [];
var _ChildGridsDataCollectionNode = node.getElementsByTagName("ChildGridsData");
if (_ChildGridsDataCollectionNode != null && _ChildGridsDataCollectionNode.length > 0) {
	var _ChildGridsDataNodes = _ChildGridsDataCollectionNode[0].getElementsByTagName("ChildGridInitData");
	var _ChildGridsDataItem;	
	for (i = 0; i < _ChildGridsDataNodes.length; i++)
	{
		_ChildGridsDataItem = deserializeNodeChildGridInitData(_ChildGridsDataNodes[i]);
			result.ChildGridsData.push(_ChildGridsDataItem);
	}						
}
else{
	result.ChildGridsData = null;
}
result.ParentFields = [];
var _ParentFieldsCollectionNode = node.getElementsByTagName("ParentFields");
if (_ParentFieldsCollectionNode != null && _ParentFieldsCollectionNode.length > 0) {
	var _ParentFieldsNodes = _ParentFieldsCollectionNode[0].getElementsByTagName("ParentControlFields");
	var _ParentFieldsItem;	
	for (i = 0; i < _ParentFieldsNodes.length; i++)
	{
		_ParentFieldsItem = deserializeNodeParentControlFields(_ParentFieldsNodes[i]);
			result.ParentFields.push(_ParentFieldsItem);
	}						
}
else{
	result.ParentFields = null;
}
result.EntityCheckedOut = node.getElementsByTagName("EntityCheckedOut")[0].textContent;
			return result;
		}

		function deserializeNodeAddChildrenResponse(node) {				
				var result = {};
			var _AddedEntitiesNodes = node.getElementsByTagName("AddedEntities");
if (_AddedEntitiesNodes && _AddedEntitiesNodes.length > 0) {
	result.AddedEntities = deserializeNodeEntitySerializationPackage(_AddedEntitiesNodes[0]);
}
else{
	result.AddedEntities = null;
}
var _GridDataNodes = node.getElementsByTagName("GridData");
if (_GridDataNodes && _GridDataNodes.length > 0) {
	result.GridData = deserializeNodeEntityViewDataWithSettings(_GridDataNodes[0]);
}
else{
	result.GridData = null;
}
			return result;
		}

		function deserializeNodeEntityFieldValidationSettingsDto(node) {				
				var result = {};
			result.IsRequired = node.getElementsByTagName("IsRequired")[0].textContent;
result.IsRequiredErrorMessage = node.getElementsByTagName("IsRequiredErrorMessage")[0].textContent;
result.MaxLength = node.getElementsByTagName("MaxLength")[0].textContent;
result.MaxLengthErrorMessage = node.getElementsByTagName("MaxLengthErrorMessage")[0].textContent;
var MaxValueNode = node.getElementsByTagName("MaxValue")[0];
var MaxValueNodeType = MaxValueNode.getAttribute("xsi:type");

switch (MaxValueNodeType) {
	case "xsd:string":
		result.MaxValue = MaxValueNode.textContent;
		break;
	case "xsd:int":
		result.MaxValue = parseInt(MaxValueNode.textContent);
		break;
}
result.MaxValueErrorMessage = node.getElementsByTagName("MaxValueErrorMessage")[0].textContent;
var MinValueNode = node.getElementsByTagName("MinValue")[0];
var MinValueNodeType = MinValueNode.getAttribute("xsi:type");

switch (MinValueNodeType) {
	case "xsd:string":
		result.MinValue = MinValueNode.textContent;
		break;
	case "xsd:int":
		result.MinValue = parseInt(MinValueNode.textContent);
		break;
}
result.MinValueErrorMessage = node.getElementsByTagName("MinValueErrorMessage")[0].textContent;
result.RegularExpression = node.getElementsByTagName("RegularExpression")[0].textContent;
result.RegularExpressionMessage = node.getElementsByTagName("RegularExpressionMessage")[0].textContent;
result.MinCheckedCount = node.getElementsByTagName("MinCheckedCount")[0].textContent;
			return result;
		}

		function deserializeNodeDynamicDefaultValueSettingsDto(node) {				
				var result = {};
			result.ValueSourceFieldName = node.getElementsByTagName("ValueSourceFieldName")[0].textContent;
result.ValueSourcePropertyId = parseInt(node.getElementsByTagName("ValueSourcePropertyId")[0].textContent);
			return result;
		}

		function deserializeNodeAutonumberValueGenerator(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeDayViewCalendarByAppointmentDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.AppointmentId = parseInt(node.getElementsByTagName("AppointmentId")[0].textContent);
			return result;
		}

		function deserializeNodeUser(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.FirstName = node.getElementsByTagName("FirstName")[0].textContent;
result.LastName = node.getElementsByTagName("LastName")[0].textContent;
result.HashedPassword = node.getElementsByTagName("HashedPassword")[0].textContent;
result.ValidationKey = node.getElementsByTagName("ValidationKey")[0].textContent;
result.Email = node.getElementsByTagName("Email")[0].textContent;
result.IsAdmin = node.getElementsByTagName("IsAdmin")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.IsActive = node.getElementsByTagName("IsActive")[0].textContent;
result.RequireChangePassword = node.getElementsByTagName("RequireChangePassword")[0].textContent;
result.JobTitle = node.getElementsByTagName("JobTitle")[0].textContent;
result.PersonTitle = node.getElementsByTagName("PersonTitle")[0].textContent;
result.AdditionalEmails = [];
var _AdditionalEmailsCollectionNode = node.getElementsByTagName("AdditionalEmails");
if (_AdditionalEmailsCollectionNode != null && _AdditionalEmailsCollectionNode.length > 0) {
	var _AdditionalEmailsNodes = _AdditionalEmailsCollectionNode[0].getElementsByTagName("String");
	var _AdditionalEmailsItem;	
	for (i = 0; i < _AdditionalEmailsNodes.length; i++)
	{
		_AdditionalEmailsItem = deserializeNodeString(_AdditionalEmailsNodes[i]);
			result.AdditionalEmails.push(_AdditionalEmailsItem);
	}						
}
else{
	result.AdditionalEmails = null;
}
result.AdditionalMobilePhones = [];
var _AdditionalMobilePhonesCollectionNode = node.getElementsByTagName("AdditionalMobilePhones");
if (_AdditionalMobilePhonesCollectionNode != null && _AdditionalMobilePhonesCollectionNode.length > 0) {
	var _AdditionalMobilePhonesNodes = _AdditionalMobilePhonesCollectionNode[0].getElementsByTagName("String");
	var _AdditionalMobilePhonesItem;	
	for (i = 0; i < _AdditionalMobilePhonesNodes.length; i++)
	{
		_AdditionalMobilePhonesItem = deserializeNodeString(_AdditionalMobilePhonesNodes[i]);
			result.AdditionalMobilePhones.push(_AdditionalMobilePhonesItem);
	}						
}
else{
	result.AdditionalMobilePhones = null;
}
result.SendActivationByEmail = node.getElementsByTagName("SendActivationByEmail")[0].textContent;
result.SendActivationBySms = node.getElementsByTagName("SendActivationBySms")[0].textContent;
result.MobilePhone = node.getElementsByTagName("MobilePhone")[0].textContent;
result.Groups = [];
var _GroupsCollectionNode = node.getElementsByTagName("Groups");
if (_GroupsCollectionNode != null && _GroupsCollectionNode.length > 0) {
	var _GroupsNodes = _GroupsCollectionNode[0].getElementsByTagName("UserGroupDto");
	var _GroupsItem;	
	for (i = 0; i < _GroupsNodes.length; i++)
	{
		_GroupsItem = deserializeNodeUserGroupDto(_GroupsNodes[i]);
			result.Groups.push(_GroupsItem);
	}						
}
else{
	result.Groups = null;
}
result.Workspaces = [];
var _WorkspacesCollectionNode = node.getElementsByTagName("Workspaces");
if (_WorkspacesCollectionNode != null && _WorkspacesCollectionNode.length > 0) {
	var _WorkspacesNodes = _WorkspacesCollectionNode[0].getElementsByTagName("WorkspaceSettingsDto");
	var _WorkspacesItem;	
	for (i = 0; i < _WorkspacesNodes.length; i++)
	{
		_WorkspacesItem = deserializeNodeWorkspaceSettingsDto(_WorkspacesNodes[i]);
			result.Workspaces.push(_WorkspacesItem);
	}						
}
else{
	result.Workspaces = null;
}
result.ExchangeEmail = node.getElementsByTagName("ExchangeEmail")[0].textContent;
			return result;
		}

		function deserializeNodePagingDto(node) {				
				var result = {};
			result.PageNumber = parseInt(node.getElementsByTagName("PageNumber")[0].textContent);
result.PageSize = parseInt(node.getElementsByTagName("PageSize")[0].textContent);
result.StartIndex = parseInt(node.getElementsByTagName("StartIndex")[0].textContent);
result.IsStartPage = node.getElementsByTagName("IsStartPage")[0].textContent;
			return result;
		}

		function deserializeNodeEmailReplyAllDto(node) {				
				var result = {};
			result.ToEmail = node.getElementsByTagName("ToEmail")[0].textContent;
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.PreviousBody = node.getElementsByTagName("PreviousBody")[0].textContent;
result.CcRecipient = node.getElementsByTagName("CcRecipient")[0].textContent;
result.ReplyBody = node.getElementsByTagName("ReplyBody")[0].textContent;
			return result;
		}

		function deserializeNodeUserFieldDefaultValue(node) {				
				var result = {};
			result.DefaultUserId = parseInt(node.getElementsByTagName("DefaultUserId")[0].textContent);
result.IsCurrentUserDefault = node.getElementsByTagName("IsCurrentUserDefault")[0].textContent;
			return result;
		}

		function deserializeNodeParentFieldFilterSettings(node) {				
				var result = {};
			result.TargetFieldId = parseInt(node.getElementsByTagName("TargetFieldId")[0].textContent);
result.FilterComboFieldName = node.getElementsByTagName("FilterComboFieldName")[0].textContent;
			return result;
		}

		function deserializeNodeRemoveItemResponse(node) {				
				var result = {};
			result.ItemType = node.getElementsByTagName("ItemType")[0].textContent;
result.ItemId = parseInt(node.getElementsByTagName("ItemId")[0].textContent);
result.RemoveOutcome = node.getElementsByTagName("RemoveOutcome")[0].textContent;
result.FolderLinkUsages = [];
var _FolderLinkUsagesCollectionNode = node.getElementsByTagName("FolderLinkUsages");
if (_FolderLinkUsagesCollectionNode != null && _FolderLinkUsagesCollectionNode.length > 0) {
	var _FolderLinkUsagesNodes = _FolderLinkUsagesCollectionNode[0].getElementsByTagName("FolderLinkUsage");
	var _FolderLinkUsagesItem;	
	for (i = 0; i < _FolderLinkUsagesNodes.length; i++)
	{
		_FolderLinkUsagesItem = deserializeNodeFolderLinkUsage(_FolderLinkUsagesNodes[i]);
			result.FolderLinkUsages.push(_FolderLinkUsagesItem);
	}						
}
else{
	result.FolderLinkUsages = null;
}
			return result;
		}

		function deserializeNodeItemRenameModel(node) {				
				var result = {};
			result.EventSubscribedFolderId = parseInt(node.getElementsByTagName("EventSubscribedFolderId")[0].textContent);
result.FullPath = node.getElementsByTagName("FullPath")[0].textContent;
result.NewName = node.getElementsByTagName("NewName")[0].textContent;
result.OldName = node.getElementsByTagName("OldName")[0].textContent;
			return result;
		}

		function deserializeNodeDeleteFolderModel(node) {				
				var result = {};
			result.FolderName = node.getElementsByTagName("FolderName")[0].textContent;
result.FullPath = node.getElementsByTagName("FullPath")[0].textContent;
result.SubscribersEmails = [];
var _SubscribersEmailsCollectionNode = node.getElementsByTagName("SubscribersEmails");
if (_SubscribersEmailsCollectionNode != null && _SubscribersEmailsCollectionNode.length > 0) {
	var _SubscribersEmailsNodes = _SubscribersEmailsCollectionNode[0].getElementsByTagName("String");
	var _SubscribersEmailsItem;	
	for (i = 0; i < _SubscribersEmailsNodes.length; i++)
	{
		_SubscribersEmailsItem = deserializeNodeString(_SubscribersEmailsNodes[i]);
			result.SubscribersEmails.push(_SubscribersEmailsItem);
	}						
}
else{
	result.SubscribersEmails = null;
}
			return result;
		}

		function deserializeNodeSingleAppointmentDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.Description = node.getElementsByTagName("Description")[0].textContent;
result.StartDate = new Date(Date.parse(node.getElementsByTagName("StartDate")[0].textContent));
result.CreationDate = new Date(Date.parse(node.getElementsByTagName("CreationDate")[0].textContent));
var _ParentAppointmentNodes = node.getElementsByTagName("ParentAppointment");
if (_ParentAppointmentNodes && _ParentAppointmentNodes.length > 0) {
	result.ParentAppointment = deserializeNodeSingleAppointmentDto(_ParentAppointmentNodes[0]);
}
else{
	result.ParentAppointment = null;
}
var _CategoryNodes = node.getElementsByTagName("Category");
if (_CategoryNodes && _CategoryNodes.length > 0) {
	result.Category = deserializeNodeAppointmentCategoryDto(_CategoryNodes[0]);
}
else{
	result.Category = null;
}
var _CalendarNodes = node.getElementsByTagName("Calendar");
if (_CalendarNodes && _CalendarNodes.length > 0) {
	result.Calendar = deserializeNodeCalendarDto(_CalendarNodes[0]);
}
else{
	result.Calendar = null;
}
result.EndDate = node.getElementsByTagName("EndDate")[0].textContent;
result.IsAllDayEvent = node.getElementsByTagName("IsAllDayEvent")[0].textContent;
result.Invitees = node.getElementsByTagName("Invitees")[0].textContent;
result.IsInvitation = node.getElementsByTagName("IsInvitation")[0].textContent;
result.InvitationId = parseInt(node.getElementsByTagName("InvitationId")[0].textContent);
result.IsAccepted = node.getElementsByTagName("IsAccepted")[0].textContent;
var _RecurrenceNodes = node.getElementsByTagName("Recurrence");
if (_RecurrenceNodes && _RecurrenceNodes.length > 0) {
	result.Recurrence = deserializeNodeAppointmentRecurrenceDto(_RecurrenceNodes[0]);
}
else{
	result.Recurrence = null;
}
result.ExternalInvitees = [];
var _ExternalInviteesCollectionNode = node.getElementsByTagName("ExternalInvitees");
if (_ExternalInviteesCollectionNode != null && _ExternalInviteesCollectionNode.length > 0) {
	var _ExternalInviteesNodes = _ExternalInviteesCollectionNode[0].getElementsByTagName("String");
	var _ExternalInviteesItem;	
	for (i = 0; i < _ExternalInviteesNodes.length; i++)
	{
		_ExternalInviteesItem = deserializeNodeString(_ExternalInviteesNodes[i]);
			result.ExternalInvitees.push(_ExternalInviteesItem);
	}						
}
else{
	result.ExternalInvitees = null;
}
result.TimeMarker = node.getElementsByTagName("TimeMarker")[0].textContent;
result.Importance = parseInt(node.getElementsByTagName("Importance")[0].textContent);
result.IsExceptionalAppointment = node.getElementsByTagName("IsExceptionalAppointment")[0].textContent;
result.Location = node.getElementsByTagName("Location")[0].textContent;
			return result;
		}

		function deserializeNodeWorkflowChangeStatus(node) {				
				var result = {};
			result.WorkflowId = parseInt(node.getElementsByTagName("WorkflowId")[0].textContent);
result.WorkflowStatus = node.getElementsByTagName("WorkflowStatus")[0].textContent;
			return result;
		}

		function deserializeNodeWizardType(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeUserGroupDto(node) {				
				var result = {};
			result.UserGroupId = parseInt(node.getElementsByTagName("UserGroupId")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Description = node.getElementsByTagName("Description")[0].textContent;
result.Workspaces = [];
var _WorkspacesCollectionNode = node.getElementsByTagName("Workspaces");
if (_WorkspacesCollectionNode != null && _WorkspacesCollectionNode.length > 0) {
	var _WorkspacesNodes = _WorkspacesCollectionNode[0].getElementsByTagName("WorkspaceSettingsDto");
	var _WorkspacesItem;	
	for (i = 0; i < _WorkspacesNodes.length; i++)
	{
		_WorkspacesItem = deserializeNodeWorkspaceSettingsDto(_WorkspacesNodes[i]);
			result.Workspaces.push(_WorkspacesItem);
	}						
}
else{
	result.Workspaces = null;
}
			return result;
		}

		function deserializeNodeEmailDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.ToEmail = [];
var _ToEmailCollectionNode = node.getElementsByTagName("ToEmail");
if (_ToEmailCollectionNode != null && _ToEmailCollectionNode.length > 0) {
	var _ToEmailNodes = _ToEmailCollectionNode[0].getElementsByTagName("String");
	var _ToEmailItem;	
	for (i = 0; i < _ToEmailNodes.length; i++)
	{
		_ToEmailItem = deserializeNodeString(_ToEmailNodes[i]);
			result.ToEmail.push(_ToEmailItem);
	}						
}
else{
	result.ToEmail = null;
}
result.FromEmail = node.getElementsByTagName("FromEmail")[0].textContent;
result.CcRecipient = [];
var _CcRecipientCollectionNode = node.getElementsByTagName("CcRecipient");
if (_CcRecipientCollectionNode != null && _CcRecipientCollectionNode.length > 0) {
	var _CcRecipientNodes = _CcRecipientCollectionNode[0].getElementsByTagName("String");
	var _CcRecipientItem;	
	for (i = 0; i < _CcRecipientNodes.length; i++)
	{
		_CcRecipientItem = deserializeNodeString(_CcRecipientNodes[i]);
			result.CcRecipient.push(_CcRecipientItem);
	}						
}
else{
	result.CcRecipient = null;
}
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.Body = node.getElementsByTagName("Body")[0].textContent;
result.BccRecipient = [];
var _BccRecipientCollectionNode = node.getElementsByTagName("BccRecipient");
if (_BccRecipientCollectionNode != null && _BccRecipientCollectionNode.length > 0) {
	var _BccRecipientNodes = _BccRecipientCollectionNode[0].getElementsByTagName("String");
	var _BccRecipientItem;	
	for (i = 0; i < _BccRecipientNodes.length; i++)
	{
		_BccRecipientItem = deserializeNodeString(_BccRecipientNodes[i]);
			result.BccRecipient.push(_BccRecipientItem);
	}						
}
else{
	result.BccRecipient = null;
}
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.EntityLink = [];
var _EntityLinkCollectionNode = node.getElementsByTagName("EntityLink");
if (_EntityLinkCollectionNode != null && _EntityLinkCollectionNode.length > 0) {
	var _EntityLinkNodes = _EntityLinkCollectionNode[0].getElementsByTagName("EntityLink");
	var _EntityLinkItem;	
	for (i = 0; i < _EntityLinkNodes.length; i++)
	{
		_EntityLinkItem = deserializeNodeEntityLink(_EntityLinkNodes[i]);
			result.EntityLink.push(_EntityLinkItem);
	}						
}
else{
	result.EntityLink = null;
}
result.ExchangeId = node.getElementsByTagName("ExchangeId")[0].textContent;
result.SentDate = new Date(Date.parse(node.getElementsByTagName("SentDate")[0].textContent));
result.EmailAttachments = [];
var _EmailAttachmentsCollectionNode = node.getElementsByTagName("EmailAttachments");
if (_EmailAttachmentsCollectionNode != null && _EmailAttachmentsCollectionNode.length > 0) {
	var _EmailAttachmentsNodes = _EmailAttachmentsCollectionNode[0].getElementsByTagName("EmailAttachmentInfo");
	var _EmailAttachmentsItem;	
	for (i = 0; i < _EmailAttachmentsNodes.length; i++)
	{
		_EmailAttachmentsItem = deserializeNodeEmailAttachmentInfo(_EmailAttachmentsNodes[i]);
			result.EmailAttachments.push(_EmailAttachmentsItem);
	}						
}
else{
	result.EmailAttachments = null;
}
			return result;
		}

		function deserializeNodeEntityViewDataWithSettings(node) {				
				var result = {};
			result.ColumnsFormat = [];
var _ColumnsFormatCollectionNode = node.getElementsByTagName("ColumnsFormat");
if (_ColumnsFormatCollectionNode != null && _ColumnsFormatCollectionNode.length > 0) {
	var _ColumnsFormatNodes = _ColumnsFormatCollectionNode[0].getElementsByTagName("EntityColumnFormat");
	var _ColumnsFormatItem;	
	for (i = 0; i < _ColumnsFormatNodes.length; i++)
	{
		_ColumnsFormatItem = deserializeNodeEntityColumnFormat(_ColumnsFormatNodes[i]);
			result.ColumnsFormat.push(_ColumnsFormatItem);
	}						
}
else{
	result.ColumnsFormat = null;
}
result.DataRows = [];
var _DataRowsCollectionNode = node.getElementsByTagName("DataRows");
if (_DataRowsCollectionNode != null && _DataRowsCollectionNode.length > 0) {
	var _DataRowsNodes = _DataRowsCollectionNode[0].getElementsByTagName("EntityViewDataRow");
	var _DataRowsItem;	
	for (i = 0; i < _DataRowsNodes.length; i++)
	{
		_DataRowsItem = deserializeNodeEntityViewDataRow(_DataRowsNodes[i]);
			result.DataRows.push(_DataRowsItem);
	}						
}
else{
	result.DataRows = null;
}
result.HadErrorRetrievingData = node.getElementsByTagName("HadErrorRetrievingData")[0].textContent;
			return result;
		}

		function deserializeNodeDeleteEntitiesRequestParameters(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.IdsToDelete = [];
var _IdsToDeleteCollectionNode = node.getElementsByTagName("IdsToDelete");
if (_IdsToDeleteCollectionNode != null && _IdsToDeleteCollectionNode.length > 0) {
	var _IdsToDeleteNodes = _IdsToDeleteCollectionNode[0].getElementsByTagName("Int32");
	var _IdsToDeleteItem;	
	for (i = 0; i < _IdsToDeleteNodes.length; i++)
	{
		_IdsToDeleteItem = deserializeNodeInt32(_IdsToDeleteNodes[i]);
			result.IdsToDelete.push(_IdsToDeleteItem);
	}						
}
else{
	result.IdsToDelete = null;
}
result.RemoveUsages = node.getElementsByTagName("RemoveUsages")[0].textContent;
			return result;
		}

		function deserializeNodeEntityFieldInfoForExpressionBuilder(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.IsSystemField = node.getElementsByTagName("IsSystemField")[0].textContent;
result.HasRelation = node.getElementsByTagName("HasRelation")[0].textContent;
result.RelatedEntityTypeId = parseInt(node.getElementsByTagName("RelatedEntityTypeId")[0].textContent);
result.ControlType = node.getElementsByTagName("ControlType")[0].textContent;
var _RelatedTypeNodes = node.getElementsByTagName("RelatedType");
if (_RelatedTypeNodes && _RelatedTypeNodes.length > 0) {
	result.RelatedType = deserializeNodeEntityTypeInfoForExpressionBuilder(_RelatedTypeNodes[0]);
}
else{
	result.RelatedType = null;
}
result.ValueType = node.getElementsByTagName("ValueType")[0].textContent;
			return result;
		}

		function deserializeNodeParentControlFields(node) {				
				var result = {};
			result.PropertyName = node.getElementsByTagName("PropertyName")[0].textContent;
result.FieldsInfo = [];
var _FieldsInfoCollectionNode = node.getElementsByTagName("FieldsInfo");
if (_FieldsInfoCollectionNode != null && _FieldsInfoCollectionNode.length > 0) {
	var _FieldsInfoNodes = _FieldsInfoCollectionNode[0].getElementsByTagName("EntityFieldInfoForParent");
	var _FieldsInfoItem;	
	for (i = 0; i < _FieldsInfoNodes.length; i++)
	{
		_FieldsInfoItem = deserializeNodeEntityFieldInfoForParent(_FieldsInfoNodes[i]);
			result.FieldsInfo.push(_FieldsInfoItem);
	}						
}
else{
	result.FieldsInfo = null;
}
			return result;
		}

		function deserializeNodeEntityTypePermissionsHeir(node) {				
				var result = {};
			result.EntityTypeRights = [];
var _EntityTypeRightsCollectionNode = node.getElementsByTagName("EntityTypeRights");
if (_EntityTypeRightsCollectionNode != null && _EntityTypeRightsCollectionNode.length > 0) {
	var _EntityTypeRightsNodes = _EntityTypeRightsCollectionNode[0].getElementsByTagName("FolderLinkRootFolderRights");
	var _EntityTypeRightsItem;	
	for (i = 0; i < _EntityTypeRightsNodes.length; i++)
	{
		_EntityTypeRightsItem = deserializeNodeFolderLinkRootFolderRights(_EntityTypeRightsNodes[i]);
			result.EntityTypeRights.push(_EntityTypeRightsItem);
	}						
}
else{
	result.EntityTypeRights = null;
}
result.FoldersToInherit = [];
var _FoldersToInheritCollectionNode = node.getElementsByTagName("FoldersToInherit");
if (_FoldersToInheritCollectionNode != null && _FoldersToInheritCollectionNode.length > 0) {
	var _FoldersToInheritNodes = _FoldersToInheritCollectionNode[0].getElementsByTagName("Int32");
	var _FoldersToInheritItem;	
	for (i = 0; i < _FoldersToInheritNodes.length; i++)
	{
		_FoldersToInheritItem = deserializeNodeInt32(_FoldersToInheritNodes[i]);
			result.FoldersToInherit.push(_FoldersToInheritItem);
	}						
}
else{
	result.FoldersToInherit = null;
}
			return result;
		}

		function deserializeNodeEntityFieldDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Label = node.getElementsByTagName("Label")[0].textContent;
result.Type = node.getElementsByTagName("Type")[0].textContent;
var _EntityTypeNodes = node.getElementsByTagName("EntityType");
if (_EntityTypeNodes && _EntityTypeNodes.length > 0) {
	result.EntityType = deserializeNodeEntityTypeDto(_EntityTypeNodes[0]);
}
else{
	result.EntityType = null;
}
result.ControlType = node.getElementsByTagName("ControlType")[0].textContent;
result.IsIdentifier = node.getElementsByTagName("IsIdentifier")[0].textContent;
var DefaultValueNode = node.getElementsByTagName("DefaultValue")[0];
var DefaultValueNodeType = DefaultValueNode.getAttribute("xsi:type");

switch (DefaultValueNodeType) {
	case "xsd:string":
		result.DefaultValue = DefaultValueNode.textContent;
		break;
	case "xsd:int":
		result.DefaultValue = parseInt(DefaultValueNode.textContent);
		break;
}
var _ValidationSettingsNodes = node.getElementsByTagName("ValidationSettings");
if (_ValidationSettingsNodes && _ValidationSettingsNodes.length > 0) {
	result.ValidationSettings = deserializeNodeEntityFieldValidationSettingsDto(_ValidationSettingsNodes[0]);
}
else{
	result.ValidationSettings = null;
}
var _RelationSettingsNodes = node.getElementsByTagName("RelationSettings");
if (_RelationSettingsNodes && _RelationSettingsNodes.length > 0) {
	result.RelationSettings = deserializeNodeFieldRelationSettingsDto(_RelationSettingsNodes[0]);
}
else{
	result.RelationSettings = null;
}
var _FlatFieldsSettingsNodes = node.getElementsByTagName("FlatFieldsSettings");
if (_FlatFieldsSettingsNodes && _FlatFieldsSettingsNodes.length > 0) {
	result.FlatFieldsSettings = deserializeNodeFlatFieldsSettingsDto(_FlatFieldsSettingsNodes[0]);
}
else{
	result.FlatFieldsSettings = null;
}
var _FolderLinkSettingsNodes = node.getElementsByTagName("FolderLinkSettings");
if (_FolderLinkSettingsNodes && _FolderLinkSettingsNodes.length > 0) {
	result.FolderLinkSettings = deserializeNodeFolderLinkSettingsDto(_FolderLinkSettingsNodes[0]);
}
else{
	result.FolderLinkSettings = null;
}
var _CalculatedFieldSettingsNodes = node.getElementsByTagName("CalculatedFieldSettings");
if (_CalculatedFieldSettingsNodes && _CalculatedFieldSettingsNodes.length > 0) {
	result.CalculatedFieldSettings = deserializeNodeCalculatedFieldSettingsDto(_CalculatedFieldSettingsNodes[0]);
}
else{
	result.CalculatedFieldSettings = null;
}
			return result;
		}

		function deserializeNodeIFolder(node) {				
				var result = {};
			result.Attributes = node.getElementsByTagName("Attributes")[0].textContent;
			return result;
		}

		function deserializeNodeSyncFolderDto(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
var _ParentNodes = node.getElementsByTagName("Parent");
if (_ParentNodes && _ParentNodes.length > 0) {
	result.Parent = deserializeNodeSyncFolderDto(_ParentNodes[0]);
}
else{
	result.Parent = null;
}
result.ParentUniqueId = node.getElementsByTagName("ParentUniqueId")[0].textContent;
result.Path = node.getElementsByTagName("Path")[0].textContent;
result.Attributes = node.getElementsByTagName("Attributes")[0].textContent;
			return result;
		}

		function deserializeNodeWorkspaceSettingsDto(node) {				
				var result = {};
			result.ID = parseInt(node.getElementsByTagName("ID")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Settings = node.getElementsByTagName("Settings")[0].textContent;
			return result;
		}

		function deserializeNodeWorkflow(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Scheduled = node.getElementsByTagName("Scheduled")[0].textContent;
var _OverviewNodes = node.getElementsByTagName("Overview");
if (_OverviewNodes && _OverviewNodes.length > 0) {
	result.Overview = deserializeNodeEntityOverviewDto(_OverviewNodes[0]);
}
else{
	result.Overview = null;
}
result.Status = node.getElementsByTagName("Status")[0].textContent;
result.Events = [];
var _EventsCollectionNode = node.getElementsByTagName("Events");
if (_EventsCollectionNode != null && _EventsCollectionNode.length > 0) {
	var _EventsNodes = _EventsCollectionNode[0].getElementsByTagName("WorkflowTrigger");
	var _EventsItem;	
	for (i = 0; i < _EventsNodes.length; i++)
	{
		_EventsItem = deserializeNodeWorkflowTrigger(_EventsNodes[i]);
			result.Events.push(_EventsItem);
	}						
}
else{
	result.Events = null;
}
result.ConditionBranches = [];
var _ConditionBranchesCollectionNode = node.getElementsByTagName("ConditionBranches");
if (_ConditionBranchesCollectionNode != null && _ConditionBranchesCollectionNode.length > 0) {
	var _ConditionBranchesNodes = _ConditionBranchesCollectionNode[0].getElementsByTagName("WorkflowConditionalBranch");
	var _ConditionBranchesItem;	
	for (i = 0; i < _ConditionBranchesNodes.length; i++)
	{
		_ConditionBranchesItem = deserializeNodeWorkflowConditionalBranch(_ConditionBranchesNodes[i]);
			result.ConditionBranches.push(_ConditionBranchesItem);
	}						
}
else{
	result.ConditionBranches = null;
}
			return result;
		}

		function deserializeNodeChangePasswordModel(node) {				
				var result = {};
			result.UserEmail = node.getElementsByTagName("UserEmail")[0].textContent;
result.OldPassword = node.getElementsByTagName("OldPassword")[0].textContent;
result.Password = node.getElementsByTagName("Password")[0].textContent;
			return result;
		}

		function deserializeNodeCreateAccountDto(node) {				
				var result = {};
			result.FirstName = node.getElementsByTagName("FirstName")[0].textContent;
result.LastName = node.getElementsByTagName("LastName")[0].textContent;
result.Account = node.getElementsByTagName("Account")[0].textContent;
result.Password = node.getElementsByTagName("Password")[0].textContent;
			return result;
		}

		function deserializeNodeEvaluatedCopy(node) {				
				var result = {};
			var _EvaluatedDataNodes = node.getElementsByTagName("EvaluatedData");
if (_EvaluatedDataNodes && _EvaluatedDataNodes.length > 0) {
	result.EvaluatedData = deserializeNodeEntityViewDataRow(_EvaluatedDataNodes[0]);
}
else{
	result.EvaluatedData = null;
}
var _CopyNodes = node.getElementsByTagName("Copy");
if (_CopyNodes && _CopyNodes.length > 0) {
	result.Copy = deserializeNodeEntityDto(_CopyNodes[0]);
}
else{
	result.Copy = null;
}
			return result;
		}

		function deserializeNodeEntityTypeImportWizardInfo(node) {				
				var result = {};
			result.EntityTypes = [];
var _EntityTypesCollectionNode = node.getElementsByTagName("EntityTypes");
if (_EntityTypesCollectionNode != null && _EntityTypesCollectionNode.length > 0) {
	var _EntityTypesNodes = _EntityTypesCollectionNode[0].getElementsByTagName("EntityTypeExportData");
	var _EntityTypesItem;	
	for (i = 0; i < _EntityTypesNodes.length; i++)
	{
		_EntityTypesItem = deserializeNodeEntityTypeExportData(_EntityTypesNodes[i]);
			result.EntityTypes.push(_EntityTypesItem);
	}						
}
else{
	result.EntityTypes = null;
}
result.ReservedEntityTypesNames = [];
var _ReservedEntityTypesNamesCollectionNode = node.getElementsByTagName("ReservedEntityTypesNames");
if (_ReservedEntityTypesNamesCollectionNode != null && _ReservedEntityTypesNamesCollectionNode.length > 0) {
	var _ReservedEntityTypesNamesNodes = _ReservedEntityTypesNamesCollectionNode[0].getElementsByTagName("String");
	var _ReservedEntityTypesNamesItem;	
	for (i = 0; i < _ReservedEntityTypesNamesNodes.length; i++)
	{
		_ReservedEntityTypesNamesItem = deserializeNodeString(_ReservedEntityTypesNamesNodes[i]);
			result.ReservedEntityTypesNames.push(_ReservedEntityTypesNamesItem);
	}						
}
else{
	result.ReservedEntityTypesNames = null;
}
			return result;
		}

		function deserializeNodeSaveEntityRequest(node) {				
				var result = {};
			result.EntityName = node.getElementsByTagName("EntityName")[0].textContent;
result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.ScalarPropertyValues = [];
var _ScalarPropertyValuesCollectionNode = node.getElementsByTagName("ScalarPropertyValues");
if (_ScalarPropertyValuesCollectionNode != null && _ScalarPropertyValuesCollectionNode.length > 0) {
	var _ScalarPropertyValuesNodes = _ScalarPropertyValuesCollectionNode[0].getElementsByTagName("ScalarEntityPropertyValue");
	var _ScalarPropertyValuesItem;	
	for (i = 0; i < _ScalarPropertyValuesNodes.length; i++)
	{
		_ScalarPropertyValuesItem = deserializeNodeScalarEntityPropertyValue(_ScalarPropertyValuesNodes[i]);
			result.ScalarPropertyValues.push(_ScalarPropertyValuesItem);
	}						
}
else{
	result.ScalarPropertyValues = null;
}
result.ReferencePropertyValues = [];
var _ReferencePropertyValuesCollectionNode = node.getElementsByTagName("ReferencePropertyValues");
if (_ReferencePropertyValuesCollectionNode != null && _ReferencePropertyValuesCollectionNode.length > 0) {
	var _ReferencePropertyValuesNodes = _ReferencePropertyValuesCollectionNode[0].getElementsByTagName("ReferenceEntityPropertyValue");
	var _ReferencePropertyValuesItem;	
	for (i = 0; i < _ReferencePropertyValuesNodes.length; i++)
	{
		_ReferencePropertyValuesItem = deserializeNodeReferenceEntityPropertyValue(_ReferencePropertyValuesNodes[i]);
			result.ReferencePropertyValues.push(_ReferencePropertyValuesItem);
	}						
}
else{
	result.ReferencePropertyValues = null;
}
result.CollectionPropertyValues = [];
var _CollectionPropertyValuesCollectionNode = node.getElementsByTagName("CollectionPropertyValues");
if (_CollectionPropertyValuesCollectionNode != null && _CollectionPropertyValuesCollectionNode.length > 0) {
	var _CollectionPropertyValuesNodes = _CollectionPropertyValuesCollectionNode[0].getElementsByTagName("CollectionEntityPropertyValue");
	var _CollectionPropertyValuesItem;	
	for (i = 0; i < _CollectionPropertyValuesNodes.length; i++)
	{
		_CollectionPropertyValuesItem = deserializeNodeCollectionEntityPropertyValue(_CollectionPropertyValuesNodes[i]);
			result.CollectionPropertyValues.push(_CollectionPropertyValuesItem);
	}						
}
else{
	result.CollectionPropertyValues = null;
}
result.AttachedConversationIds = [];
var _AttachedConversationIdsCollectionNode = node.getElementsByTagName("AttachedConversationIds");
if (_AttachedConversationIdsCollectionNode != null && _AttachedConversationIdsCollectionNode.length > 0) {
	var _AttachedConversationIdsNodes = _AttachedConversationIdsCollectionNode[0].getElementsByTagName("Int32");
	var _AttachedConversationIdsItem;	
	for (i = 0; i < _AttachedConversationIdsNodes.length; i++)
	{
		_AttachedConversationIdsItem = deserializeNodeInt32(_AttachedConversationIdsNodes[i]);
			result.AttachedConversationIds.push(_AttachedConversationIdsItem);
	}						
}
else{
	result.AttachedConversationIds = null;
}
result.RelationsCreatedBeforeSaving = [];
var _RelationsCreatedBeforeSavingCollectionNode = node.getElementsByTagName("RelationsCreatedBeforeSaving");
if (_RelationsCreatedBeforeSavingCollectionNode != null && _RelationsCreatedBeforeSavingCollectionNode.length > 0) {
	var _RelationsCreatedBeforeSavingNodes = _RelationsCreatedBeforeSavingCollectionNode[0].getElementsByTagName("UnsavedEntityRelationDto");
	var _RelationsCreatedBeforeSavingItem;	
	for (i = 0; i < _RelationsCreatedBeforeSavingNodes.length; i++)
	{
		_RelationsCreatedBeforeSavingItem = deserializeNodeUnsavedEntityRelationDto(_RelationsCreatedBeforeSavingNodes[i]);
			result.RelationsCreatedBeforeSaving.push(_RelationsCreatedBeforeSavingItem);
	}						
}
else{
	result.RelationsCreatedBeforeSaving = null;
}
result.CreateNewEntity = node.getElementsByTagName("CreateNewEntity")[0].textContent;
			return result;
		}

		function deserializeNodeEntitySerializationPackage(node) {				
				var result = {};
			result.Entities = node.getElementsByTagName("Entities")[0].textContent;
result.RootEntitiesIndexes = [];
var _RootEntitiesIndexesCollectionNode = node.getElementsByTagName("RootEntitiesIndexes");
if (_RootEntitiesIndexesCollectionNode != null && _RootEntitiesIndexesCollectionNode.length > 0) {
	var _RootEntitiesIndexesNodes = _RootEntitiesIndexesCollectionNode[0].getElementsByTagName("Int32");
	var _RootEntitiesIndexesItem;	
	for (i = 0; i < _RootEntitiesIndexesNodes.length; i++)
	{
		_RootEntitiesIndexesItem = deserializeNodeInt32(_RootEntitiesIndexesNodes[i]);
			result.RootEntitiesIndexes.push(_RootEntitiesIndexesItem);
	}						
}
else{
	result.RootEntitiesIndexes = null;
}
var _FirstRootEntityNodes = node.getElementsByTagName("FirstRootEntity");
if (_FirstRootEntityNodes && _FirstRootEntityNodes.length > 0) {
	result.FirstRootEntity = deserializeNodeEntityDtoForInput(_FirstRootEntityNodes[0]);
}
else{
	result.FirstRootEntity = null;
}
			return result;
		}

		function deserializeNodeEntityTypeWithFormView(node) {				
				var result = {};
			var _EntityTypeNodes = node.getElementsByTagName("EntityType");
if (_EntityTypeNodes && _EntityTypeNodes.length > 0) {
	result.EntityType = deserializeNodeEntityTypeDto(_EntityTypeNodes[0]);
}
else{
	result.EntityType = null;
}
result.jFormView = node.getElementsByTagName("jFormView")[0].textContent;
			return result;
		}

		function deserializeNodeCreateFolderModel(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.ParentUniqueId = node.getElementsByTagName("ParentUniqueId")[0].textContent;
result.Attributes = node.getElementsByTagName("Attributes")[0].textContent;
			return result;
		}

		function deserializeNodeRecurrenceExceptionDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Exception = new Date(Date.parse(node.getElementsByTagName("Exception")[0].textContent));
var _AppointmentNodes = node.getElementsByTagName("Appointment");
if (_AppointmentNodes && _AppointmentNodes.length > 0) {
	result.Appointment = deserializeNodeSingleAppointmentDto(_AppointmentNodes[0]);
}
else{
	result.Appointment = null;
}
			return result;
		}

		function deserializeNodeUsersToGroup(node) {				
				var result = {};
			result.UserIds = [];
var _UserIdsCollectionNode = node.getElementsByTagName("UserIds");
if (_UserIdsCollectionNode != null && _UserIdsCollectionNode.length > 0) {
	var _UserIdsNodes = _UserIdsCollectionNode[0].getElementsByTagName("Int32");
	var _UserIdsItem;	
	for (i = 0; i < _UserIdsNodes.length; i++)
	{
		_UserIdsItem = deserializeNodeInt32(_UserIdsNodes[i]);
			result.UserIds.push(_UserIdsItem);
	}						
}
else{
	result.UserIds = null;
}
result.UserGroupId = parseInt(node.getElementsByTagName("UserGroupId")[0].textContent);
			return result;
		}

		function deserializeNodeFolderSearchResult(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.FolderName = node.getElementsByTagName("FolderName")[0].textContent;
result.FolderPath = node.getElementsByTagName("FolderPath")[0].textContent;
result.CreatedBy = node.getElementsByTagName("CreatedBy")[0].textContent;
result.CreatedDate = new Date(Date.parse(node.getElementsByTagName("CreatedDate")[0].textContent));
result.ModifiedDate = new Date(Date.parse(node.getElementsByTagName("ModifiedDate")[0].textContent));
			return result;
		}

		function deserializeNodePermissionSubjectDto(node) {				
				var result = {};
			result.SubjectId = parseInt(node.getElementsByTagName("SubjectId")[0].textContent);
result.SubjectType = node.getElementsByTagName("SubjectType")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
			return result;
		}

		function deserializeNodeUserRecipientDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.DisplayName = node.getElementsByTagName("DisplayName")[0].textContent;
result.LoginEmail = node.getElementsByTagName("LoginEmail")[0].textContent;
result.ExchangeEmail = node.getElementsByTagName("ExchangeEmail")[0].textContent;
			return result;
		}

		function deserializeNodeEntityFieldInfoForExport(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.IsReference = node.getElementsByTagName("IsReference")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.ValueFormat = node.getElementsByTagName("ValueFormat")[0].textContent;
result.IsCollection = node.getElementsByTagName("IsCollection")[0].textContent;
result.FieldsOfRelatedEntity = [];
var _FieldsOfRelatedEntityCollectionNode = node.getElementsByTagName("FieldsOfRelatedEntity");
if (_FieldsOfRelatedEntityCollectionNode != null && _FieldsOfRelatedEntityCollectionNode.length > 0) {
	var _FieldsOfRelatedEntityNodes = _FieldsOfRelatedEntityCollectionNode[0].getElementsByTagName("EntityFieldInfoForExport");
	var _FieldsOfRelatedEntityItem;	
	for (i = 0; i < _FieldsOfRelatedEntityNodes.length; i++)
	{
		_FieldsOfRelatedEntityItem = deserializeNodeEntityFieldInfoForExport(_FieldsOfRelatedEntityNodes[i]);
			result.FieldsOfRelatedEntity.push(_FieldsOfRelatedEntityItem);
	}						
}
else{
	result.FieldsOfRelatedEntity = null;
}
			return result;
		}

		function deserializeNodeDeleteEntityResult(node) {				
				var result = {};
			result.DeleteSuccessful = node.getElementsByTagName("DeleteSuccessful")[0].textContent;
result.UsagesInfo = [];
var _UsagesInfoCollectionNode = node.getElementsByTagName("UsagesInfo");
if (_UsagesInfoCollectionNode != null && _UsagesInfoCollectionNode.length > 0) {
	var _UsagesInfoNodes = _UsagesInfoCollectionNode[0].getElementsByTagName("EntityOverviewGridData");
	var _UsagesInfoItem;	
	for (i = 0; i < _UsagesInfoNodes.length; i++)
	{
		_UsagesInfoItem = deserializeNodeEntityOverviewGridData(_UsagesInfoNodes[i]);
			result.UsagesInfo.push(_UsagesInfoItem);
	}						
}
else{
	result.UsagesInfo = null;
}
			return result;
		}

		function deserializeNodeDeleteEntityFailure(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.UsagesInfo = [];
var _UsagesInfoCollectionNode = node.getElementsByTagName("UsagesInfo");
if (_UsagesInfoCollectionNode != null && _UsagesInfoCollectionNode.length > 0) {
	var _UsagesInfoNodes = _UsagesInfoCollectionNode[0].getElementsByTagName("EntityOverviewGridData");
	var _UsagesInfoItem;	
	for (i = 0; i < _UsagesInfoNodes.length; i++)
	{
		_UsagesInfoItem = deserializeNodeEntityOverviewGridData(_UsagesInfoNodes[i]);
			result.UsagesInfo.push(_UsagesInfoItem);
	}						
}
else{
	result.UsagesInfo = null;
}
			return result;
		}

		function deserializeNodeValueItemModel(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.ItemId = parseInt(node.getElementsByTagName("ItemId")[0].textContent);
result.Value = node.getElementsByTagName("Value")[0].textContent;
result.IsUsed = node.getElementsByTagName("IsUsed")[0].textContent;
result.IsDefault = node.getElementsByTagName("IsDefault")[0].textContent;
result.ItemOrder = parseInt(node.getElementsByTagName("ItemOrder")[0].textContent);
			return result;
		}

		function deserializeNodeFolderLinkRootFolderRights(node) {				
				var result = {};
			result.Permissions = node.getElementsByTagName("Permissions")[0].textContent;
result.UserId = node.getElementsByTagName("UserId")[0].textContent;
result.GroupId = node.getElementsByTagName("GroupId")[0].textContent;
			return result;
		}

		function deserializeNodeValidationRuleDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Description = node.getElementsByTagName("Description")[0].textContent;
result.RegexValue = node.getElementsByTagName("RegexValue")[0].textContent;
result.ErrorMessage = node.getElementsByTagName("ErrorMessage")[0].textContent;
			return result;
		}

		function deserializeNodeFormulaDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Type = node.getElementsByTagName("Type")[0].textContent;
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
result.Operands = [];
var _OperandsCollectionNode = node.getElementsByTagName("Operands");
if (_OperandsCollectionNode != null && _OperandsCollectionNode.length > 0) {
	var _OperandsNodes = _OperandsCollectionNode[0].getElementsByTagName("FormulaDto");
	var _OperandsItem;	
	for (i = 0; i < _OperandsNodes.length; i++)
	{
		_OperandsItem = deserializeNodeFormulaDto(_OperandsNodes[i]);
			result.Operands.push(_OperandsItem);
	}						
}
else{
	result.Operands = null;
}
result.FieldType = node.getElementsByTagName("FieldType")[0].textContent;
			return result;
		}

		function deserializeNodeIFile(node) {				
				var result = {};
			result.MD5 = node.getElementsByTagName("MD5")[0].textContent;
result.IsReadOnly = node.getElementsByTagName("IsReadOnly")[0].textContent;
			return result;
		}

		function deserializeNodeValidationKeyPolicySettingsDto(node) {				
				var result = {};
			result.KeyLength = parseInt(node.getElementsByTagName("KeyLength")[0].textContent);
result.PasswordPolicies = node.getElementsByTagName("PasswordPolicies")[0].textContent;
			return result;
		}

		function deserializeNodeClientSettingsDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
var _ValidationKeySettingsNodes = node.getElementsByTagName("ValidationKeySettings");
if (_ValidationKeySettingsNodes && _ValidationKeySettingsNodes.length > 0) {
	result.ValidationKeySettings = deserializeNodeValidationKeySettingsDto(_ValidationKeySettingsNodes[0]);
}
else{
	result.ValidationKeySettings = null;
}
result.UseValidationKey = node.getElementsByTagName("UseValidationKey")[0].textContent;
var _ExchangeSettingsNodes = node.getElementsByTagName("ExchangeSettings");
if (_ExchangeSettingsNodes && _ExchangeSettingsNodes.length > 0) {
	result.ExchangeSettings = deserializeNodeExchangeSettingsDto(_ExchangeSettingsNodes[0]);
}
else{
	result.ExchangeSettings = null;
}
			return result;
		}

		function deserializeNodeSaveAppointmentDto(node) {				
				var result = {};
			var _AppointmentNodes = node.getElementsByTagName("Appointment");
if (_AppointmentNodes && _AppointmentNodes.length > 0) {
	result.Appointment = deserializeNodeSingleAppointmentDto(_AppointmentNodes[0]);
}
else{
	result.Appointment = null;
}
result.IsNew = node.getElementsByTagName("IsNew")[0].textContent;
var _OldAppointmentNodes = node.getElementsByTagName("OldAppointment");
if (_OldAppointmentNodes && _OldAppointmentNodes.length > 0) {
	result.OldAppointment = deserializeNodeSingleAppointmentDto(_OldAppointmentNodes[0]);
}
else{
	result.OldAppointment = null;
}
			return result;
		}

		function deserializeNodeAppointmentsByTermRequest(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.CalendarId = parseInt(node.getElementsByTagName("CalendarId")[0].textContent);
result.StartDate = new Date(Date.parse(node.getElementsByTagName("StartDate")[0].textContent));
result.EndDate = new Date(Date.parse(node.getElementsByTagName("EndDate")[0].textContent));
result.CalendarIsShared = node.getElementsByTagName("CalendarIsShared")[0].textContent;
			return result;
		}

		function deserializeNodeAppointmentCategoryDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Description = node.getElementsByTagName("Description")[0].textContent;
result.Color = node.getElementsByTagName("Color")[0].textContent;
result.CalendarId = parseInt(node.getElementsByTagName("CalendarId")[0].textContent);
			return result;
		}

		function deserializeNodeDummyAction(node) {				
				var result = {};
			result.Message = node.getElementsByTagName("Message")[0].textContent;
result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
			return result;
		}

		function deserializeNodeConfigDto(node) {				
				var result = {};
			result.Id = node.getElementsByTagName("Id")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Path = node.getElementsByTagName("Path")[0].textContent;
			return result;
		}

		function deserializeNodeChangesType(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeMemberExpression(node) {				
				var result = {};
			result.MemberId = parseInt(node.getElementsByTagName("MemberId")[0].textContent);
var _ExpressionNodes = node.getElementsByTagName("Expression");
if (_ExpressionNodes && _ExpressionNodes.length > 0) {
	result.Expression = deserializeNodeMemberExpression(_ExpressionNodes[0]);
}
else{
	result.Expression = null;
}
			return result;
		}

		function deserializeNodeShortAccountInfoDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.Account = node.getElementsByTagName("Account")[0].textContent;
result.Password = node.getElementsByTagName("Password")[0].textContent;
			return result;
		}

		function deserializeNodeCurrentEmailForwardDto(node) {				
				var result = {};
			result.ExchangeId = node.getElementsByTagName("ExchangeId")[0].textContent;
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.Body = node.getElementsByTagName("Body")[0].textContent;
			return result;
		}

		function deserializeNodeEntityPropertyDtoForInput(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeEntityOverviewDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.IsDefault = node.getElementsByTagName("IsDefault")[0].textContent;
var _EntityTypeNodes = node.getElementsByTagName("EntityType");
if (_EntityTypeNodes && _EntityTypeNodes.length > 0) {
	result.EntityType = deserializeNodeEntityTypeDto(_EntityTypeNodes[0]);
}
else{
	result.EntityType = null;
}
result.Columns = [];
var _ColumnsCollectionNode = node.getElementsByTagName("Columns");
if (_ColumnsCollectionNode != null && _ColumnsCollectionNode.length > 0) {
	var _ColumnsNodes = _ColumnsCollectionNode[0].getElementsByTagName("EntityOverviewColumnDto");
	var _ColumnsItem;	
	for (i = 0; i < _ColumnsNodes.length; i++)
	{
		_ColumnsItem = deserializeNodeEntityOverviewColumnDto(_ColumnsNodes[i]);
			result.Columns.push(_ColumnsItem);
	}						
}
else{
	result.Columns = null;
}
var _FilterNodes = node.getElementsByTagName("Filter");
if (_FilterNodes && _FilterNodes.length > 0) {
	result.Filter = deserializeNodeFormulaDto(_FilterNodes[0]);
}
else{
	result.Filter = null;
}
result.IsSystem = node.getElementsByTagName("IsSystem")[0].textContent;
			return result;
		}

		function deserializeNodeSyncFileDto(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
var _ParentNodes = node.getElementsByTagName("Parent");
if (_ParentNodes && _ParentNodes.length > 0) {
	result.Parent = deserializeNodeSyncFolderDto(_ParentNodes[0]);
}
else{
	result.Parent = null;
}
result.MD5 = node.getElementsByTagName("MD5")[0].textContent;
result.IsReadOnly = node.getElementsByTagName("IsReadOnly")[0].textContent;
result.Path = node.getElementsByTagName("Path")[0].textContent;
result.ParentUniqueId = node.getElementsByTagName("ParentUniqueId")[0].textContent;
			return result;
		}

		function deserializeNodeRenameAndMoveModel(node) {				
				var result = {};
			result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.ParentUniqueId = node.getElementsByTagName("ParentUniqueId")[0].textContent;
			return result;
		}

		function deserializeNodeFirstLookSharedCalendarData(node) {				
				var result = {};
			result.TargetCalendarId = parseInt(node.getElementsByTagName("TargetCalendarId")[0].textContent);
result.TargetCalendarAppointments = [];
var _TargetCalendarAppointmentsCollectionNode = node.getElementsByTagName("TargetCalendarAppointments");
if (_TargetCalendarAppointmentsCollectionNode != null && _TargetCalendarAppointmentsCollectionNode.length > 0) {
	var _TargetCalendarAppointmentsNodes = _TargetCalendarAppointmentsCollectionNode[0].getElementsByTagName("SingleAppointmentDto");
	var _TargetCalendarAppointmentsItem;	
	for (i = 0; i < _TargetCalendarAppointmentsNodes.length; i++)
	{
		_TargetCalendarAppointmentsItem = deserializeNodeSingleAppointmentDto(_TargetCalendarAppointmentsNodes[i]);
			result.TargetCalendarAppointments.push(_TargetCalendarAppointmentsItem);
	}						
}
else{
	result.TargetCalendarAppointments = null;
}
result.WasDataLoadedForTargetCalendar = node.getElementsByTagName("WasDataLoadedForTargetCalendar")[0].textContent;
var _CalendarInfoNodes = node.getElementsByTagName("CalendarInfo");
if (_CalendarInfoNodes && _CalendarInfoNodes.length > 0) {
	result.CalendarInfo = deserializeNodeFirstLookCalendarData(_CalendarInfoNodes[0]);
}
else{
	result.CalendarInfo = null;
}
			return result;
		}

		function deserializeNodeCreateEntityRowAction(node) {				
				var result = {};
			var _EntityTypeNodes = node.getElementsByTagName("EntityType");
if (_EntityTypeNodes && _EntityTypeNodes.length > 0) {
	result.EntityType = deserializeNodeEntityTypeDto(_EntityTypeNodes[0]);
}
else{
	result.EntityType = null;
}
result.FieldBindings = [];
var _FieldBindingsCollectionNode = node.getElementsByTagName("FieldBindings");
if (_FieldBindingsCollectionNode != null && _FieldBindingsCollectionNode.length > 0) {
	var _FieldBindingsNodes = _FieldBindingsCollectionNode[0].getElementsByTagName("CreateEntityRowFieldBinding");
	var _FieldBindingsItem;	
	for (i = 0; i < _FieldBindingsNodes.length; i++)
	{
		_FieldBindingsItem = deserializeNodeCreateEntityRowFieldBinding(_FieldBindingsNodes[i]);
			result.FieldBindings.push(_FieldBindingsItem);
	}						
}
else{
	result.FieldBindings = null;
}
result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
			return result;
		}

		function deserializeNodeUserSettingsDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.NotificationSound = node.getElementsByTagName("NotificationSound")[0].textContent;
result.NotificationPopup = node.getElementsByTagName("NotificationPopup")[0].textContent;
result.ShowWizard = node.getElementsByTagName("ShowWizard")[0].textContent;
result.ShowDownloadSyncButton = node.getElementsByTagName("ShowDownloadSyncButton")[0].textContent;
result.SyncClientUrl = node.getElementsByTagName("SyncClientUrl")[0].textContent;
			return result;
		}

		function deserializeNodeUserProfileDto(node) {				
				var result = {};
			result.Email = node.getElementsByTagName("Email")[0].textContent;
result.FirstName = node.getElementsByTagName("FirstName")[0].textContent;
result.LastName = node.getElementsByTagName("LastName")[0].textContent;
result.JobTitle = node.getElementsByTagName("JobTitle")[0].textContent;
result.PersonTitle = node.getElementsByTagName("PersonTitle")[0].textContent;
result.MobilePhone = node.getElementsByTagName("MobilePhone")[0].textContent;
result.ExchangeEmail = node.getElementsByTagName("ExchangeEmail")[0].textContent;
result.ExchangePassword = node.getElementsByTagName("ExchangePassword")[0].textContent;
			return result;
		}

		function deserializeNodeValidateClientUserModel(node) {				
				var result = {};
			result.ClientName = node.getElementsByTagName("ClientName")[0].textContent;
result.UserName = node.getElementsByTagName("UserName")[0].textContent;
result.PasswordHash = node.getElementsByTagName("PasswordHash")[0].textContent;
			return result;
		}

		function deserializeNodeUserGroupPermissions(node) {				
				var result = {};
			var _UserGroupNodes = node.getElementsByTagName("UserGroup");
if (_UserGroupNodes && _UserGroupNodes.length > 0) {
	result.UserGroup = deserializeNodeUserGroupDto(_UserGroupNodes[0]);
}
else{
	result.UserGroup = null;
}
var _RoleNodes = node.getElementsByTagName("Role");
if (_RoleNodes && _RoleNodes.length > 0) {
	result.Role = deserializeNodeRole(_RoleNodes[0]);
}
else{
	result.Role = null;
}
var _UserNodes = node.getElementsByTagName("User");
if (_UserNodes && _UserNodes.length > 0) {
	result.User = deserializeNodeUser(_UserNodes[0]);
}
else{
	result.User = null;
}
result.PopulatePermissionsToChild = node.getElementsByTagName("PopulatePermissionsToChild")[0].textContent;
			return result;
		}

		function deserializeNodeAggregateExpression(node) {				
				var result = {};
			var _CollectionNodes = node.getElementsByTagName("Collection");
if (_CollectionNodes && _CollectionNodes.length > 0) {
	result.Collection = deserializeNodeMultipleValueExpression(_CollectionNodes[0]);
}
else{
	result.Collection = null;
}
var _ExpressionNodes = node.getElementsByTagName("Expression");
if (_ExpressionNodes && _ExpressionNodes.length > 0) {
	result.Expression = deserializeNodeSingleValueExpression(_ExpressionNodes[0]);
}
else{
	result.Expression = null;
}
			return result;
		}

		function deserializeNodeEntityOverviewGridProperties(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.EntityTypeIconPath = node.getElementsByTagName("EntityTypeIconPath")[0].textContent;
result.EntityTypePermissions = node.getElementsByTagName("EntityTypePermissions")[0].textContent;
			return result;
		}

		function deserializeNodeShortEntityDto(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.EntityId = parseInt(node.getElementsByTagName("EntityId")[0].textContent);
			return result;
		}

		function deserializeNodeInputExtraDataResponse(node) {				
				var result = {};
			result.ParentData = [];
var _ParentDataCollectionNode = node.getElementsByTagName("ParentData");
if (_ParentDataCollectionNode != null && _ParentDataCollectionNode.length > 0) {
	var _ParentDataNodes = _ParentDataCollectionNode[0].getElementsByTagName("ParentInitializationDataWithId");
	var _ParentDataItem;	
	for (i = 0; i < _ParentDataNodes.length; i++)
	{
		_ParentDataItem = deserializeNodeParentInitializationDataWithId(_ParentDataNodes[i]);
			result.ParentData.push(_ParentDataItem);
	}						
}
else{
	result.ParentData = null;
}
result.AllUsers = [];
var _AllUsersCollectionNode = node.getElementsByTagName("AllUsers");
if (_AllUsersCollectionNode != null && _AllUsersCollectionNode.length > 0) {
	var _AllUsersNodes = _AllUsersCollectionNode[0].getElementsByTagName("User");
	var _AllUsersItem;	
	for (i = 0; i < _AllUsersNodes.length; i++)
	{
		_AllUsersItem = deserializeNodeUser(_AllUsersNodes[i]);
			result.AllUsers.push(_AllUsersItem);
	}						
}
else{
	result.AllUsers = null;
}
			return result;
		}

		function deserializeNodeDeleteOneEntityRequest(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.EntityId = parseInt(node.getElementsByTagName("EntityId")[0].textContent);
result.RemoveUsages = node.getElementsByTagName("RemoveUsages")[0].textContent;
			return result;
		}

		function deserializeNodeTreeItemMoveDto(node) {				
				var result = {};
			result.ItemId = parseInt(node.getElementsByTagName("ItemId")[0].textContent);
result.ParentFolderId = parseInt(node.getElementsByTagName("ParentFolderId")[0].textContent);
result.ItemType = node.getElementsByTagName("ItemType")[0].textContent;
var _NotifyModelNodes = node.getElementsByTagName("NotifyModel");
if (_NotifyModelNodes && _NotifyModelNodes.length > 0) {
	result.NotifyModel = deserializeNodeMoveItemModel(_NotifyModelNodes[0]);
}
else{
	result.NotifyModel = null;
}
			return result;
		}

		function deserializeNodeUpdateFileModel(node) {				
				var result = {};
			result.FullPathToFile = node.getElementsByTagName("FullPathToFile")[0].textContent;
result.FileName = node.getElementsByTagName("FileName")[0].textContent;
result.ParentFolderId = parseInt(node.getElementsByTagName("ParentFolderId")[0].textContent);
			return result;
		}

		function deserializeNodeUserWithWorskpacesDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.FirstName = node.getElementsByTagName("FirstName")[0].textContent;
result.LastName = node.getElementsByTagName("LastName")[0].textContent;
result.HashedPassword = node.getElementsByTagName("HashedPassword")[0].textContent;
result.Email = node.getElementsByTagName("Email")[0].textContent;
result.IsAdmin = node.getElementsByTagName("IsAdmin")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.IsActive = node.getElementsByTagName("IsActive")[0].textContent;
result.Title = node.getElementsByTagName("Title")[0].textContent;
result.JobTitle = node.getElementsByTagName("JobTitle")[0].textContent;
result.MobilePhone = node.getElementsByTagName("MobilePhone")[0].textContent;
result.Avatar = [];
var _AvatarCollectionNode = node.getElementsByTagName("Avatar");
if (_AvatarCollectionNode != null && _AvatarCollectionNode.length > 0) {
	var _AvatarNodes = _AvatarCollectionNode[0].getElementsByTagName("Byte");
	var _AvatarItem;	
	for (i = 0; i < _AvatarNodes.length; i++)
	{
		_AvatarItem = deserializeNodeByte(_AvatarNodes[i]);
			result.Avatar.push(_AvatarItem);
	}						
}
else{
	result.Avatar = null;
}
result.RequireChangePassword = node.getElementsByTagName("RequireChangePassword")[0].textContent;
result.ExchangeEmail = node.getElementsByTagName("ExchangeEmail")[0].textContent;
result.MainEmail = node.getElementsByTagName("MainEmail")[0].textContent;
result.Workspaces = [];
var _WorkspacesCollectionNode = node.getElementsByTagName("Workspaces");
if (_WorkspacesCollectionNode != null && _WorkspacesCollectionNode.length > 0) {
	var _WorkspacesNodes = _WorkspacesCollectionNode[0].getElementsByTagName("WorkspaceSettingsDto");
	var _WorkspacesItem;	
	for (i = 0; i < _WorkspacesNodes.length; i++)
	{
		_WorkspacesItem = deserializeNodeWorkspaceSettingsDto(_WorkspacesNodes[i]);
			result.Workspaces.push(_WorkspacesItem);
	}						
}
else{
	result.Workspaces = null;
}
result.Groups = [];
var _GroupsCollectionNode = node.getElementsByTagName("Groups");
if (_GroupsCollectionNode != null && _GroupsCollectionNode.length > 0) {
	var _GroupsNodes = _GroupsCollectionNode[0].getElementsByTagName("GroupWithWorkspacesDto");
	var _GroupsItem;	
	for (i = 0; i < _GroupsNodes.length; i++)
	{
		_GroupsItem = deserializeNodeGroupWithWorkspacesDto(_GroupsNodes[i]);
			result.Groups.push(_GroupsItem);
	}						
}
else{
	result.Groups = null;
}
			return result;
		}

		function deserializeNodeSecurityObject(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Type = node.getElementsByTagName("Type")[0].textContent;
result.UserGroupPermissions = [];
var _UserGroupPermissionsCollectionNode = node.getElementsByTagName("UserGroupPermissions");
if (_UserGroupPermissionsCollectionNode != null && _UserGroupPermissionsCollectionNode.length > 0) {
	var _UserGroupPermissionsNodes = _UserGroupPermissionsCollectionNode[0].getElementsByTagName("UserGroupPermissions");
	var _UserGroupPermissionsItem;	
	for (i = 0; i < _UserGroupPermissionsNodes.length; i++)
	{
		_UserGroupPermissionsItem = deserializeNodeUserGroupPermissions(_UserGroupPermissionsNodes[i]);
			result.UserGroupPermissions.push(_UserGroupPermissionsItem);
	}						
}
else{
	result.UserGroupPermissions = null;
}
result.PermissionsToRemove = [];
var _PermissionsToRemoveCollectionNode = node.getElementsByTagName("PermissionsToRemove");
if (_PermissionsToRemoveCollectionNode != null && _PermissionsToRemoveCollectionNode.length > 0) {
	var _PermissionsToRemoveNodes = _PermissionsToRemoveCollectionNode[0].getElementsByTagName("UserGroupPermissions");
	var _PermissionsToRemoveItem;	
	for (i = 0; i < _PermissionsToRemoveNodes.length; i++)
	{
		_PermissionsToRemoveItem = deserializeNodeUserGroupPermissions(_PermissionsToRemoveNodes[i]);
			result.PermissionsToRemove.push(_PermissionsToRemoveItem);
	}						
}
else{
	result.PermissionsToRemove = null;
}
			return result;
		}

		function deserializeNodeSubtractExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodeSingleValueExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodeSingleValueExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeSingleValueConstant(node) {				
				var result = {};
			var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeEmailAttachmentInfo(node) {				
				var result = {};
			result.AttachmentUniqueName = node.getElementsByTagName("AttachmentUniqueName")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.ExchangeId = node.getElementsByTagName("ExchangeId")[0].textContent;
result.IsAttachmentFromEmail = node.getElementsByTagName("IsAttachmentFromEmail")[0].textContent;
			return result;
		}

		function deserializeNodeReceiveDataForEntitiesRequestParameters(node) {				
				var result = {};
			var _EntityOverviewNodes = node.getElementsByTagName("EntityOverview");
if (_EntityOverviewNodes && _EntityOverviewNodes.length > 0) {
	result.EntityOverview = deserializeNodeEntityOverviewDto(_EntityOverviewNodes[0]);
}
else{
	result.EntityOverview = null;
}
result.IdsOfEntities = [];
var _IdsOfEntitiesCollectionNode = node.getElementsByTagName("IdsOfEntities");
if (_IdsOfEntitiesCollectionNode != null && _IdsOfEntitiesCollectionNode.length > 0) {
	var _IdsOfEntitiesNodes = _IdsOfEntitiesCollectionNode[0].getElementsByTagName("Int32");
	var _IdsOfEntitiesItem;	
	for (i = 0; i < _IdsOfEntitiesNodes.length; i++)
	{
		_IdsOfEntitiesItem = deserializeNodeInt32(_IdsOfEntitiesNodes[i]);
			result.IdsOfEntities.push(_IdsOfEntitiesItem);
	}						
}
else{
	result.IdsOfEntities = null;
}
			return result;
		}

		function deserializeNodeEntityTypesAndViews(node) {				
				var result = {};
			result.EntityTypes = [];
var _EntityTypesCollectionNode = node.getElementsByTagName("EntityTypes");
if (_EntityTypesCollectionNode != null && _EntityTypesCollectionNode.length > 0) {
	var _EntityTypesNodes = _EntityTypesCollectionNode[0].getElementsByTagName("EntityTypeDto");
	var _EntityTypesItem;	
	for (i = 0; i < _EntityTypesNodes.length; i++)
	{
		_EntityTypesItem = deserializeNodeEntityTypeDto(_EntityTypesNodes[i]);
			result.EntityTypes.push(_EntityTypesItem);
	}						
}
else{
	result.EntityTypes = null;
}
result.EntityOverviews = [];
var _EntityOverviewsCollectionNode = node.getElementsByTagName("EntityOverviews");
if (_EntityOverviewsCollectionNode != null && _EntityOverviewsCollectionNode.length > 0) {
	var _EntityOverviewsNodes = _EntityOverviewsCollectionNode[0].getElementsByTagName("EntityOverviewDto");
	var _EntityOverviewsItem;	
	for (i = 0; i < _EntityOverviewsNodes.length; i++)
	{
		_EntityOverviewsItem = deserializeNodeEntityOverviewDto(_EntityOverviewsNodes[i]);
			result.EntityOverviews.push(_EntityOverviewsItem);
	}						
}
else{
	result.EntityOverviews = null;
}
			return result;
		}

		function deserializeNodeScalarEntityPropertyValue(node) {				
				var result = {};
			result.Name = node.getElementsByTagName("Name")[0].textContent;
var ValueNode = node.getElementsByTagName("Value")[0];
var ValueNodeType = ValueNode.getAttribute("xsi:type");

switch (ValueNodeType) {
	case "xsd:string":
		result.Value = ValueNode.textContent;
		break;
	case "xsd:int":
		result.Value = parseInt(ValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodePrepareChildGridRequest(node) {				
				var result = {};
			result.ChildEntityTypeId = parseInt(node.getElementsByTagName("ChildEntityTypeId")[0].textContent);
result.EntityIdentifiers = [];
var _EntityIdentifiersCollectionNode = node.getElementsByTagName("EntityIdentifiers");
if (_EntityIdentifiersCollectionNode != null && _EntityIdentifiersCollectionNode.length > 0) {
	var _EntityIdentifiersNodes = _EntityIdentifiersCollectionNode[0].getElementsByTagName("Int32");
	var _EntityIdentifiersItem;	
	for (i = 0; i < _EntityIdentifiersNodes.length; i++)
	{
		_EntityIdentifiersItem = deserializeNodeInt32(_EntityIdentifiersNodes[i]);
			result.EntityIdentifiers.push(_EntityIdentifiersItem);
	}						
}
else{
	result.EntityIdentifiers = null;
}
			return result;
		}

		function deserializeNodeExportEntitySettings(node) {				
				var result = {};
			result.TemplateFileId = node.getElementsByTagName("TemplateFileId")[0].textContent;
result.OutputFolderId = node.getElementsByTagName("OutputFolderId")[0].textContent;
result.OutputName = node.getElementsByTagName("OutputName")[0].textContent;
			return result;
		}

		function deserializeNodeEntityTypeWithFormViewsDto(node) {				
				var result = {};
			var _EntityTypeDtoNodes = node.getElementsByTagName("EntityTypeDto");
if (_EntityTypeDtoNodes && _EntityTypeDtoNodes.length > 0) {
	result.EntityTypeDto = deserializeNodeEntityTypeDto(_EntityTypeDtoNodes[0]);
}
else{
	result.EntityTypeDto = null;
}
result.FormViewsDto = [];
var _FormViewsDtoCollectionNode = node.getElementsByTagName("FormViewsDto");
if (_FormViewsDtoCollectionNode != null && _FormViewsDtoCollectionNode.length > 0) {
	var _FormViewsDtoNodes = _FormViewsDtoCollectionNode[0].getElementsByTagName("EntityFormDto");
	var _FormViewsDtoItem;	
	for (i = 0; i < _FormViewsDtoNodes.length; i++)
	{
		_FormViewsDtoItem = deserializeNodeEntityFormDto(_FormViewsDtoNodes[i]);
			result.FormViewsDto.push(_FormViewsDtoItem);
	}						
}
else{
	result.FormViewsDto = null;
}
var _PermissionsHeirNodes = node.getElementsByTagName("PermissionsHeir");
if (_PermissionsHeirNodes && _PermissionsHeirNodes.length > 0) {
	result.PermissionsHeir = deserializeNodeEntityTypePermissionsHeir(_PermissionsHeirNodes[0]);
}
else{
	result.PermissionsHeir = null;
}
			return result;
		}

		function deserializeNodeAutoNumbersFieldSettings(node) {				
				var result = {};
			result.StartValue = parseInt(node.getElementsByTagName("StartValue")[0].textContent);
result.IncrementStep = parseInt(node.getElementsByTagName("IncrementStep")[0].textContent);
result.FormatString = node.getElementsByTagName("FormatString")[0].textContent;
result.CurrentValue = parseInt(node.getElementsByTagName("CurrentValue")[0].textContent);
			return result;
		}

		function deserializeNodeGroupWithWorkspacesDto(node) {				
				var result = {};
			result.GroupId = parseInt(node.getElementsByTagName("GroupId")[0].textContent);
result.Workspaces = [];
var _WorkspacesCollectionNode = node.getElementsByTagName("Workspaces");
if (_WorkspacesCollectionNode != null && _WorkspacesCollectionNode.length > 0) {
	var _WorkspacesNodes = _WorkspacesCollectionNode[0].getElementsByTagName("WorkspaceSettingsDto");
	var _WorkspacesItem;	
	for (i = 0; i < _WorkspacesNodes.length; i++)
	{
		_WorkspacesItem = deserializeNodeWorkspaceSettingsDto(_WorkspacesNodes[i]);
			result.Workspaces.push(_WorkspacesItem);
	}						
}
else{
	result.Workspaces = null;
}
			return result;
		}

		function deserializeNodeBranchDto(node) {				
				var result = {};
			result.Id = node.getElementsByTagName("Id")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
var _ConfigNodes = node.getElementsByTagName("Config");
if (_ConfigNodes && _ConfigNodes.length > 0) {
	result.Config = deserializeNodeConfigDto(_ConfigNodes[0]);
}
else{
	result.Config = null;
}
			return result;
		}

		function deserializeNodeCreateUserDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.FirstName = node.getElementsByTagName("FirstName")[0].textContent;
result.LastName = node.getElementsByTagName("LastName")[0].textContent;
result.HashedPassword = node.getElementsByTagName("HashedPassword")[0].textContent;
result.PlainPassword = node.getElementsByTagName("PlainPassword")[0].textContent;
result.Email = node.getElementsByTagName("Email")[0].textContent;
result.IsAdmin = node.getElementsByTagName("IsAdmin")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.IsActive = node.getElementsByTagName("IsActive")[0].textContent;
result.RequireChangePassword = node.getElementsByTagName("RequireChangePassword")[0].textContent;
result.JobTitle = node.getElementsByTagName("JobTitle")[0].textContent;
result.PersonTitle = node.getElementsByTagName("PersonTitle")[0].textContent;
result.AdditionalEmails = [];
var _AdditionalEmailsCollectionNode = node.getElementsByTagName("AdditionalEmails");
if (_AdditionalEmailsCollectionNode != null && _AdditionalEmailsCollectionNode.length > 0) {
	var _AdditionalEmailsNodes = _AdditionalEmailsCollectionNode[0].getElementsByTagName("String");
	var _AdditionalEmailsItem;	
	for (i = 0; i < _AdditionalEmailsNodes.length; i++)
	{
		_AdditionalEmailsItem = deserializeNodeString(_AdditionalEmailsNodes[i]);
			result.AdditionalEmails.push(_AdditionalEmailsItem);
	}						
}
else{
	result.AdditionalEmails = null;
}
result.AdditionalMobilePhones = [];
var _AdditionalMobilePhonesCollectionNode = node.getElementsByTagName("AdditionalMobilePhones");
if (_AdditionalMobilePhonesCollectionNode != null && _AdditionalMobilePhonesCollectionNode.length > 0) {
	var _AdditionalMobilePhonesNodes = _AdditionalMobilePhonesCollectionNode[0].getElementsByTagName("String");
	var _AdditionalMobilePhonesItem;	
	for (i = 0; i < _AdditionalMobilePhonesNodes.length; i++)
	{
		_AdditionalMobilePhonesItem = deserializeNodeString(_AdditionalMobilePhonesNodes[i]);
			result.AdditionalMobilePhones.push(_AdditionalMobilePhonesItem);
	}						
}
else{
	result.AdditionalMobilePhones = null;
}
result.SendActivationByEmail = node.getElementsByTagName("SendActivationByEmail")[0].textContent;
result.SendActivationBySms = node.getElementsByTagName("SendActivationBySms")[0].textContent;
result.MobilePhone = node.getElementsByTagName("MobilePhone")[0].textContent;
result.Groups = [];
var _GroupsCollectionNode = node.getElementsByTagName("Groups");
if (_GroupsCollectionNode != null && _GroupsCollectionNode.length > 0) {
	var _GroupsNodes = _GroupsCollectionNode[0].getElementsByTagName("UserGroupDto");
	var _GroupsItem;	
	for (i = 0; i < _GroupsNodes.length; i++)
	{
		_GroupsItem = deserializeNodeUserGroupDto(_GroupsNodes[i]);
			result.Groups.push(_GroupsItem);
	}						
}
else{
	result.Groups = null;
}
result.Workspaces = [];
var _WorkspacesCollectionNode = node.getElementsByTagName("Workspaces");
if (_WorkspacesCollectionNode != null && _WorkspacesCollectionNode.length > 0) {
	var _WorkspacesNodes = _WorkspacesCollectionNode[0].getElementsByTagName("WorkspaceSettingsDto");
	var _WorkspacesItem;	
	for (i = 0; i < _WorkspacesNodes.length; i++)
	{
		_WorkspacesItem = deserializeNodeWorkspaceSettingsDto(_WorkspacesNodes[i]);
			result.Workspaces.push(_WorkspacesItem);
	}						
}
else{
	result.Workspaces = null;
}
result.CreateNewAccount = node.getElementsByTagName("CreateNewAccount")[0].textContent;
result.ExchangeEmail = node.getElementsByTagName("ExchangeEmail")[0].textContent;
result.ExchangePassword = node.getElementsByTagName("ExchangePassword")[0].textContent;
			return result;
		}

		function deserializeNodeFileRemoveModel(node) {				
				var result = {};
			var _FileNodes = node.getElementsByTagName("File");
if (_FileNodes && _FileNodes.length > 0) {
	result.File = deserializeNodeFileDto(_FileNodes[0]);
}
else{
	result.File = null;
}
result.ClientName = node.getElementsByTagName("ClientName")[0].textContent;
result.RemoveOutcome = node.getElementsByTagName("RemoveOutcome")[0].textContent;
			return result;
		}

		function deserializeNodeIExpressionEvaluator(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeSumExpression(node) {				
				var result = {};
			var _WeirdOperandNodes = node.getElementsByTagName("WeirdOperand");
if (_WeirdOperandNodes && _WeirdOperandNodes.length > 0) {
	result.WeirdOperand = deserializeNodeEvaluationExpression(_WeirdOperandNodes[0]);
}
else{
	result.WeirdOperand = null;
}
var _CollectionNodes = node.getElementsByTagName("Collection");
if (_CollectionNodes && _CollectionNodes.length > 0) {
	result.Collection = deserializeNodeMultipleValueExpression(_CollectionNodes[0]);
}
else{
	result.Collection = null;
}
var _ExpressionNodes = node.getElementsByTagName("Expression");
if (_ExpressionNodes && _ExpressionNodes.length > 0) {
	result.Expression = deserializeNodeSingleValueExpression(_ExpressionNodes[0]);
}
else{
	result.Expression = null;
}
			return result;
		}

		function deserializeNodeEntityTypeImportSaveResult(node) {				
				var result = {};
			result.SavedEntityTypeNames = [];
var _SavedEntityTypeNamesCollectionNode = node.getElementsByTagName("SavedEntityTypeNames");
if (_SavedEntityTypeNamesCollectionNode != null && _SavedEntityTypeNamesCollectionNode.length > 0) {
	var _SavedEntityTypeNamesNodes = _SavedEntityTypeNamesCollectionNode[0].getElementsByTagName("String");
	var _SavedEntityTypeNamesItem;	
	for (i = 0; i < _SavedEntityTypeNamesNodes.length; i++)
	{
		_SavedEntityTypeNamesItem = deserializeNodeString(_SavedEntityTypeNamesNodes[i]);
			result.SavedEntityTypeNames.push(_SavedEntityTypeNamesItem);
	}						
}
else{
	result.SavedEntityTypeNames = null;
}
result.ForbiddenTypeNames = [];
var _ForbiddenTypeNamesCollectionNode = node.getElementsByTagName("ForbiddenTypeNames");
if (_ForbiddenTypeNamesCollectionNode != null && _ForbiddenTypeNamesCollectionNode.length > 0) {
	var _ForbiddenTypeNamesNodes = _ForbiddenTypeNamesCollectionNode[0].getElementsByTagName("String");
	var _ForbiddenTypeNamesItem;	
	for (i = 0; i < _ForbiddenTypeNamesNodes.length; i++)
	{
		_ForbiddenTypeNamesItem = deserializeNodeString(_ForbiddenTypeNamesNodes[i]);
			result.ForbiddenTypeNames.push(_ForbiddenTypeNamesItem);
	}						
}
else{
	result.ForbiddenTypeNames = null;
}
			return result;
		}

		function deserializeNodeModifiedAutonumberValue(node) {				
				var result = {};
			result.EntityName = node.getElementsByTagName("EntityName")[0].textContent;
result.OriginalEntityId = parseInt(node.getElementsByTagName("OriginalEntityId")[0].textContent);
result.PropertyName = node.getElementsByTagName("PropertyName")[0].textContent;
var NewValueNode = node.getElementsByTagName("NewValue")[0];
var NewValueNodeType = NewValueNode.getAttribute("xsi:type");

switch (NewValueNodeType) {
	case "xsd:string":
		result.NewValue = NewValueNode.textContent;
		break;
	case "xsd:int":
		result.NewValue = parseInt(NewValueNode.textContent);
		break;
}
			return result;
		}

		function deserializeNodeEntityFieldInfoForCalculatedField(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.ControlType = node.getElementsByTagName("ControlType")[0].textContent;
result.SerializedExpression = node.getElementsByTagName("SerializedExpression")[0].textContent;
result.CircularReferenceDetected = node.getElementsByTagName("CircularReferenceDetected")[0].textContent;
			return result;
		}

		function deserializeNodeShortEntityTypeDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
			return result;
		}

		function deserializeNodeLoadInputFormRequest(node) {				
				var result = {};
			result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
result.EntityId = node.getElementsByTagName("EntityId")[0].textContent;
result.Checkout = node.getElementsByTagName("Checkout")[0].textContent;
			return result;
		}

		function deserializeNodeFlagsFieldValue(node) {				
				var result = {};
			result.ListId = parseInt(node.getElementsByTagName("ListId")[0].textContent);
result.ItemId = parseInt(node.getElementsByTagName("ItemId")[0].textContent);
			return result;
		}

		function deserializeNodeDateFieldDefaultValueType(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeMoveItemModel(node) {				
				var result = {};
			result.SubscribeFolderId = parseInt(node.getElementsByTagName("SubscribeFolderId")[0].textContent);
result.OldFullPath = node.getElementsByTagName("OldFullPath")[0].textContent;
result.NewFullPath = node.getElementsByTagName("NewFullPath")[0].textContent;
result.ItemName = node.getElementsByTagName("ItemName")[0].textContent;
result.TargetFolderId = parseInt(node.getElementsByTagName("TargetFolderId")[0].textContent);
			return result;
		}

		function deserializeNodeFirstLookCalendarData(node) {				
				var result = {};
			var _CalendarNodes = node.getElementsByTagName("Calendar");
if (_CalendarNodes && _CalendarNodes.length > 0) {
	result.Calendar = deserializeNodeCalendarDto(_CalendarNodes[0]);
}
else{
	result.Calendar = null;
}
result.SharedCalendars = [];
var _SharedCalendarsCollectionNode = node.getElementsByTagName("SharedCalendars");
if (_SharedCalendarsCollectionNode != null && _SharedCalendarsCollectionNode.length > 0) {
	var _SharedCalendarsNodes = _SharedCalendarsCollectionNode[0].getElementsByTagName("SharedCalendarInfoDto");
	var _SharedCalendarsItem;	
	for (i = 0; i < _SharedCalendarsNodes.length; i++)
	{
		_SharedCalendarsItem = deserializeNodeSharedCalendarInfoDto(_SharedCalendarsNodes[i]);
			result.SharedCalendars.push(_SharedCalendarsItem);
	}						
}
else{
	result.SharedCalendars = null;
}
			return result;
		}

		function deserializeNodeConditionOperation(node) {				
				var result = {};
						return result;
		}

		function deserializeNodeWorkflowCondition(node) {				
				var result = {};
			result.WorkflowConditionId = parseInt(node.getElementsByTagName("WorkflowConditionId")[0].textContent);
var _ConditionOperationNodes = node.getElementsByTagName("ConditionOperation");
if (_ConditionOperationNodes && _ConditionOperationNodes.length > 0) {
	result.ConditionOperation = deserializeNodeConditionOperation(_ConditionOperationNodes[0]);
}
else{
	result.ConditionOperation = null;
}
var _FirstArgumentNodes = node.getElementsByTagName("FirstArgument");
if (_FirstArgumentNodes && _FirstArgumentNodes.length > 0) {
	result.FirstArgument = deserializeNodeWorkflowCondition(_FirstArgumentNodes[0]);
}
else{
	result.FirstArgument = null;
}
var _SecondArgumentNodes = node.getElementsByTagName("SecondArgument");
if (_SecondArgumentNodes && _SecondArgumentNodes.length > 0) {
	result.SecondArgument = deserializeNodeWorkflowCondition(_SecondArgumentNodes[0]);
}
else{
	result.SecondArgument = null;
}
var ConstantValueNode = node.getElementsByTagName("ConstantValue")[0];
var ConstantValueNodeType = ConstantValueNode.getAttribute("xsi:type");

switch (ConstantValueNodeType) {
	case "xsd:string":
		result.ConstantValue = ConstantValueNode.textContent;
		break;
	case "xsd:int":
		result.ConstantValue = parseInt(ConstantValueNode.textContent);
		break;
}
var _OverviewColumnNodes = node.getElementsByTagName("OverviewColumn");
if (_OverviewColumnNodes && _OverviewColumnNodes.length > 0) {
	result.OverviewColumn = deserializeNodeEntityOverviewColumnDto(_OverviewColumnNodes[0]);
}
else{
	result.OverviewColumn = null;
}
			return result;
		}

		function deserializeNodeLanguageInfo(node) {				
				var result = {};
			result.Languages = [];
var _LanguagesCollectionNode = node.getElementsByTagName("Languages");
if (_LanguagesCollectionNode != null && _LanguagesCollectionNode.length > 0) {
	var _LanguagesNodes = _LanguagesCollectionNode[0].getElementsByTagName("LanguageDto");
	var _LanguagesItem;	
	for (i = 0; i < _LanguagesNodes.length; i++)
	{
		_LanguagesItem = deserializeNodeLanguageDto(_LanguagesNodes[i]);
			result.Languages.push(_LanguagesItem);
	}						
}
else{
	result.Languages = null;
}
			return result;
		}

		function deserializeNodeGetSubscriptionRequestDto(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.EntityTypeId = parseInt(node.getElementsByTagName("EntityTypeId")[0].textContent);
			return result;
		}

		function deserializeNodeAvgExpression(node) {				
				var result = {};
			var _CollectionNodes = node.getElementsByTagName("Collection");
if (_CollectionNodes && _CollectionNodes.length > 0) {
	result.Collection = deserializeNodeMultipleValueExpression(_CollectionNodes[0]);
}
else{
	result.Collection = null;
}
var _ExpressionNodes = node.getElementsByTagName("Expression");
if (_ExpressionNodes && _ExpressionNodes.length > 0) {
	result.Expression = deserializeNodeSingleValueExpression(_ExpressionNodes[0]);
}
else{
	result.Expression = null;
}
			return result;
		}

		function deserializeNodeAddExpression(node) {				
				var result = {};
			var _LeftNodes = node.getElementsByTagName("Left");
if (_LeftNodes && _LeftNodes.length > 0) {
	result.Left = deserializeNodeSingleValueExpression(_LeftNodes[0]);
}
else{
	result.Left = null;
}
var _RightNodes = node.getElementsByTagName("Right");
if (_RightNodes && _RightNodes.length > 0) {
	result.Right = deserializeNodeSingleValueExpression(_RightNodes[0]);
}
else{
	result.Right = null;
}
			return result;
		}

		function deserializeNodeSaveUserOverviewRequest(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
var _EntityOverviewNodes = node.getElementsByTagName("EntityOverview");
if (_EntityOverviewNodes && _EntityOverviewNodes.length > 0) {
	result.EntityOverview = deserializeNodeEntityOverviewDto(_EntityOverviewNodes[0]);
}
else{
	result.EntityOverview = null;
}
			return result;
		}

		function deserializeNodeOverviewAndEntities(node) {				
				var result = {};
			var _ViewNodes = node.getElementsByTagName("View");
if (_ViewNodes && _ViewNodes.length > 0) {
	result.View = deserializeNodeEntityOverviewDto(_ViewNodes[0]);
}
else{
	result.View = null;
}
var _EntitiesNodes = node.getElementsByTagName("Entities");
if (_EntitiesNodes && _EntitiesNodes.length > 0) {
	result.Entities = deserializeNodeEntitySerializationPackage(_EntitiesNodes[0]);
}
else{
	result.Entities = null;
}
			return result;
		}

		function deserializeNodeEntityTypeExportData(node) {				
				var result = {};
			var _EntityTypeNodes = node.getElementsByTagName("EntityType");
if (_EntityTypeNodes && _EntityTypeNodes.length > 0) {
	result.EntityType = deserializeNodeEntityTypeDto(_EntityTypeNodes[0]);
}
else{
	result.EntityType = null;
}
result.Overviews = [];
var _OverviewsCollectionNode = node.getElementsByTagName("Overviews");
if (_OverviewsCollectionNode != null && _OverviewsCollectionNode.length > 0) {
	var _OverviewsNodes = _OverviewsCollectionNode[0].getElementsByTagName("EntityOverviewDto");
	var _OverviewsItem;	
	for (i = 0; i < _OverviewsNodes.length; i++)
	{
		_OverviewsItem = deserializeNodeEntityOverviewDto(_OverviewsNodes[i]);
			result.Overviews.push(_OverviewsItem);
	}						
}
else{
	result.Overviews = null;
}
var _FormControlNodes = node.getElementsByTagName("FormControl");
if (_FormControlNodes && _FormControlNodes.length > 0) {
	result.FormControl = deserializeNodeEntityFormDto(_FormControlNodes[0]);
}
else{
	result.FormControl = null;
}
			return result;
		}

		function deserializeNodePrepareChildGridResponse(node) {				
				var result = {};
			var _EntitiesNodes = node.getElementsByTagName("Entities");
if (_EntitiesNodes && _EntitiesNodes.length > 0) {
	result.Entities = deserializeNodeEntitySerializationPackage(_EntitiesNodes[0]);
}
else{
	result.Entities = null;
}
var _GridDataNodes = node.getElementsByTagName("GridData");
if (_GridDataNodes && _GridDataNodes.length > 0) {
	result.GridData = deserializeNodeEntityViewDataWithSettings(_GridDataNodes[0]);
}
else{
	result.GridData = null;
}
var _OverviewNodes = node.getElementsByTagName("Overview");
if (_OverviewNodes && _OverviewNodes.length > 0) {
	result.Overview = deserializeNodeEntityOverviewDto(_OverviewNodes[0]);
}
else{
	result.Overview = null;
}
result.EntityTypePermissions = node.getElementsByTagName("EntityTypePermissions")[0].textContent;
			return result;
		}

		function deserializeNodeEntityTypeInfoForExpressionBuilder(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Fields = [];
var _FieldsCollectionNode = node.getElementsByTagName("Fields");
if (_FieldsCollectionNode != null && _FieldsCollectionNode.length > 0) {
	var _FieldsNodes = _FieldsCollectionNode[0].getElementsByTagName("EntityFieldInfoForExpressionBuilder");
	var _FieldsItem;	
	for (i = 0; i < _FieldsNodes.length; i++)
	{
		_FieldsItem = deserializeNodeEntityFieldInfoForExpressionBuilder(_FieldsNodes[i]);
			result.Fields.push(_FieldsItem);
	}						
}
else{
	result.Fields = null;
}
			return result;
		}

		function deserializeNodeEntityDtoForInput(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Properties = [];
var _PropertiesCollectionNode = node.getElementsByTagName("Properties");
if (_PropertiesCollectionNode != null && _PropertiesCollectionNode.length > 0) {
	var _PropertiesNodes = _PropertiesCollectionNode[0].getElementsByTagName("EntityPropertyDtoForInput");
	var _PropertiesItem;	
	for (i = 0; i < _PropertiesNodes.length; i++)
	{
		_PropertiesItem = deserializeNodeEntityPropertyDtoForInput(_PropertiesNodes[i]);
			result.Properties.push(_PropertiesItem);
	}						
}
else{
	result.Properties = null;
}
result.Relations = [];
var _RelationsCollectionNode = node.getElementsByTagName("Relations");
if (_RelationsCollectionNode != null && _RelationsCollectionNode.length > 0) {
	var _RelationsNodes = _RelationsCollectionNode[0].getElementsByTagName("EntityRelationForInput");
	var _RelationsItem;	
	for (i = 0; i < _RelationsNodes.length; i++)
	{
		_RelationsItem = deserializeNodeEntityRelationForInput(_RelationsNodes[i]);
			result.Relations.push(_RelationsItem);
	}						
}
else{
	result.Relations = null;
}
			return result;
		}

		function deserializeNodeEntityFolderLinkValues(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.Values = [];
var _ValuesCollectionNode = node.getElementsByTagName("Values");
if (_ValuesCollectionNode != null && _ValuesCollectionNode.length > 0) {
	var _ValuesNodes = _ValuesCollectionNode[0].getElementsByTagName("EntityPropertyDtoForInput");
	var _ValuesItem;	
	for (i = 0; i < _ValuesNodes.length; i++)
	{
		_ValuesItem = deserializeNodeEntityPropertyDtoForInput(_ValuesNodes[i]);
			result.Values.push(_ValuesItem);
	}						
}
else{
	result.Values = null;
}
			return result;
		}

		function deserializeNodeEnumFieldValue(node) {				
				var result = {};
			result.ListId = parseInt(node.getElementsByTagName("ListId")[0].textContent);
result.ItemId = parseInt(node.getElementsByTagName("ItemId")[0].textContent);
			return result;
		}

		function deserializeNodeEntityTypeDto(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.IconPath = node.getElementsByTagName("IconPath")[0].textContent;
result.TemplateFolderId = node.getElementsByTagName("TemplateFolderId")[0].textContent;
result.Permissions = node.getElementsByTagName("Permissions")[0].textContent;
result.EntityFields = [];
var _EntityFieldsCollectionNode = node.getElementsByTagName("EntityFields");
if (_EntityFieldsCollectionNode != null && _EntityFieldsCollectionNode.length > 0) {
	var _EntityFieldsNodes = _EntityFieldsCollectionNode[0].getElementsByTagName("EntityFieldDto");
	var _EntityFieldsItem;	
	for (i = 0; i < _EntityFieldsNodes.length; i++)
	{
		_EntityFieldsItem = deserializeNodeEntityFieldDto(_EntityFieldsNodes[i]);
			result.EntityFields.push(_EntityFieldsItem);
	}						
}
else{
	result.EntityFields = null;
}
			return result;
		}

		function deserializeNodeEntityFormDto(node) {				
				var result = {};
			result.EntityTypeName = node.getElementsByTagName("EntityTypeName")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.EntityFormObject = node.getElementsByTagName("EntityFormObject")[0].textContent;
result.EntityFieldsForCalculation = [];
var _EntityFieldsForCalculationCollectionNode = node.getElementsByTagName("EntityFieldsForCalculation");
if (_EntityFieldsForCalculationCollectionNode != null && _EntityFieldsForCalculationCollectionNode.length > 0) {
	var _EntityFieldsForCalculationNodes = _EntityFieldsForCalculationCollectionNode[0].getElementsByTagName("EntityFieldInfoForCalculatedField");
	var _EntityFieldsForCalculationItem;	
	for (i = 0; i < _EntityFieldsForCalculationNodes.length; i++)
	{
		_EntityFieldsForCalculationItem = deserializeNodeEntityFieldInfoForCalculatedField(_EntityFieldsForCalculationNodes[i]);
			result.EntityFieldsForCalculation.push(_EntityFieldsForCalculationItem);
	}						
}
else{
	result.EntityFieldsForCalculation = null;
}
			return result;
		}

		function deserializeNodeMoveModel(node) {				
				var result = {};
			result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.ParentUniqueId = node.getElementsByTagName("ParentUniqueId")[0].textContent;
			return result;
		}

		function deserializeNodeFirstLookCalendarDataForDayView(node) {				
				var result = {};
			result.TargetDate = new Date(Date.parse(node.getElementsByTagName("TargetDate")[0].textContent));
var _CalendarDataNodes = node.getElementsByTagName("CalendarData");
if (_CalendarDataNodes && _CalendarDataNodes.length > 0) {
	result.CalendarData = deserializeNodeFirstLookCalendarData(_CalendarDataNodes[0]);
}
else{
	result.CalendarData = null;
}
			return result;
		}

		function deserializeNodeExceptionalAppointmentDto(node) {				
				var result = {};
			result.AppointmentId = parseInt(node.getElementsByTagName("AppointmentId")[0].textContent);
result.ExceptionDate = new Date(Date.parse(node.getElementsByTagName("ExceptionDate")[0].textContent));
var _AppointmentNodes = node.getElementsByTagName("Appointment");
if (_AppointmentNodes && _AppointmentNodes.length > 0) {
	result.Appointment = deserializeNodeSingleAppointmentDto(_AppointmentNodes[0]);
}
else{
	result.Appointment = null;
}
			return result;
		}

		function deserializeNodeSectorDto(node) {				
				var result = {};
			result.Id = node.getElementsByTagName("Id")[0].textContent;
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.Branches = [];
var _BranchesCollectionNode = node.getElementsByTagName("Branches");
if (_BranchesCollectionNode != null && _BranchesCollectionNode.length > 0) {
	var _BranchesNodes = _BranchesCollectionNode[0].getElementsByTagName("BranchDto");
	var _BranchesItem;	
	for (i = 0; i < _BranchesNodes.length; i++)
	{
		_BranchesItem = deserializeNodeBranchDto(_BranchesNodes[i]);
			result.Branches.push(_BranchesItem);
	}						
}
else{
	result.Branches = null;
}
			return result;
		}

		function deserializeNodeFileSearchResult(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.FileName = node.getElementsByTagName("FileName")[0].textContent;
result.FilePath = node.getElementsByTagName("FilePath")[0].textContent;
result.CreatedBy = node.getElementsByTagName("CreatedBy")[0].textContent;
result.CreatedDate = new Date(Date.parse(node.getElementsByTagName("CreatedDate")[0].textContent));
result.ModifiedDate = new Date(Date.parse(node.getElementsByTagName("ModifiedDate")[0].textContent));
result.PhysicalUrl = node.getElementsByTagName("PhysicalUrl")[0].textContent;
			return result;
		}

		function deserializeNodeEmailSearchResult(node) {				
				var result = {};
			result.EmailId = parseInt(node.getElementsByTagName("EmailId")[0].textContent);
result.Subject = node.getElementsByTagName("Subject")[0].textContent;
result.SentDateTime = node.getElementsByTagName("SentDateTime")[0].textContent;
			return result;
		}

		function deserializeNodeFolderEntityModel(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.FullPath = node.getElementsByTagName("FullPath")[0].textContent;
			return result;
		}

		function deserializeNodeFolderCreator(node) {				
				var result = {};
			result.UserId = parseInt(node.getElementsByTagName("UserId")[0].textContent);
result.FirstName = node.getElementsByTagName("FirstName")[0].textContent;
result.LastName = node.getElementsByTagName("LastName")[0].textContent;
			return result;
		}

		function deserializeNodeEmailSentInfoDto(node) {				
				var result = {};
			result.EmailId = parseInt(node.getElementsByTagName("EmailId")[0].textContent);
result.SentDate = new Date(Date.parse(node.getElementsByTagName("SentDate")[0].textContent));
			return result;
		}

		function deserializeNodeEntityFieldInfoForParent(node) {				
				var result = {};
			result.Id = parseInt(node.getElementsByTagName("Id")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
			return result;
		}

		function deserializeNodeAddChildrenRequest(node) {				
				var result = {};
			result.ChildEntityTypeId = parseInt(node.getElementsByTagName("ChildEntityTypeId")[0].textContent);
result.AddedEntityIdentifiers = [];
var _AddedEntityIdentifiersCollectionNode = node.getElementsByTagName("AddedEntityIdentifiers");
if (_AddedEntityIdentifiersCollectionNode != null && _AddedEntityIdentifiersCollectionNode.length > 0) {
	var _AddedEntityIdentifiersNodes = _AddedEntityIdentifiersCollectionNode[0].getElementsByTagName("Int32");
	var _AddedEntityIdentifiersItem;	
	for (i = 0; i < _AddedEntityIdentifiersNodes.length; i++)
	{
		_AddedEntityIdentifiersItem = deserializeNodeInt32(_AddedEntityIdentifiersNodes[i]);
			result.AddedEntityIdentifiers.push(_AddedEntityIdentifiersItem);
	}						
}
else{
	result.AddedEntityIdentifiers = null;
}
var _ExistingEntitiesNodes = node.getElementsByTagName("ExistingEntities");
if (_ExistingEntitiesNodes && _ExistingEntitiesNodes.length > 0) {
	result.ExistingEntities = deserializeNodeEntitySerializationPackage(_ExistingEntitiesNodes[0]);
}
else{
	result.ExistingEntities = null;
}
			return result;
		}

		function deserializeNodeCalculatedFieldSettingsDto(node) {				
				var result = {};
			result.SerializedExpression = node.getElementsByTagName("SerializedExpression")[0].textContent;
			return result;
		}

		function deserializeNodeCreateFileModel(node) {				
				var result = {};
			result.ModelVersion = parseInt(node.getElementsByTagName("ModelVersion")[0].textContent);
result.Name = node.getElementsByTagName("Name")[0].textContent;
result.UniqueId = node.getElementsByTagName("UniqueId")[0].textContent;
result.ParentUniqueId = node.getElementsByTagName("ParentUniqueId")[0].textContent;
result.MD5 = node.getElementsByTagName("MD5")[0].textContent;
result.Content = [];
var _ContentCollectionNode = node.getElementsByTagName("Content");
if (_ContentCollectionNode != null && _ContentCollectionNode.length > 0) {
	var _ContentNodes = _ContentCollectionNode[0].getElementsByTagName("Byte");
	var _ContentItem;	
	for (i = 0; i < _ContentNodes.length; i++)
	{
		_ContentItem = deserializeNodeByte(_ContentNodes[i]);
			result.Content.push(_ContentItem);
	}						
}
else{
	result.Content = null;
}
result.ChunkNumber = parseInt(node.getElementsByTagName("ChunkNumber")[0].textContent);
result.ChunkPosition = parseInt(node.getElementsByTagName("ChunkPosition")[0].textContent);
result.LastChunk = node.getElementsByTagName("LastChunk")[0].textContent;
result.ChunkSessionId = node.getElementsByTagName("ChunkSessionId")[0].textContent;
			return result;
		}

		function deserializeNodeFileTreeWrapper(node) {				
				var result = {};
			result.Files = [];
var _FilesCollectionNode = node.getElementsByTagName("Files");
if (_FilesCollectionNode != null && _FilesCollectionNode.length > 0) {
	var _FilesNodes = _FilesCollectionNode[0].getElementsByTagName("SyncFileDto");
	var _FilesItem;	
	for (i = 0; i < _FilesNodes.length; i++)
	{
		_FilesItem = deserializeNodeSyncFileDto(_FilesNodes[i]);
			result.Files.push(_FilesItem);
	}						
}
else{
	result.Files = null;
}
result.Folders = [];
var _FoldersCollectionNode = node.getElementsByTagName("Folders");
if (_FoldersCollectionNode != null && _FoldersCollectionNode.length > 0) {
	var _FoldersNodes = _FoldersCollectionNode[0].getElementsByTagName("SyncFolderDto");
	var _FoldersItem;	
	for (i = 0; i < _FoldersNodes.length; i++)
	{
		_FoldersItem = deserializeNodeSyncFolderDto(_FoldersNodes[i]);
			result.Folders.push(_FoldersItem);
	}						
}
else{
	result.Folders = null;
}
			return result;
		}

		function deserializeNodeSharedCalendarInfoDto(node) {				
				var result = {};
			result.CalendarId = parseInt(node.getElementsByTagName("CalendarId")[0].textContent);
result.OwnerId = parseInt(node.getElementsByTagName("OwnerId")[0].textContent);
result.OwnerFirstName = node.getElementsByTagName("OwnerFirstName")[0].textContent;
result.OwnerLastName = node.getElementsByTagName("OwnerLastName")[0].textContent;
result.Permissions = node.getElementsByTagName("Permissions")[0].textContent;
result.IsShared = node.getElementsByTagName("IsShared")[0].textContent;
			return result;
		}

		function deserializeNode<>c__DisplayClassb(node) {				
				var result = {};
						return result;
		}

		function deserializeNode<>c__DisplayClass18(node) {				
				var result = {};
						return result;
		}

	    return {
					deserializeIValueContainer: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeIValueContainer(xmlDoc);
					},
					deserializeBaseWorkflowAction: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeBaseWorkflowAction(xmlDoc);
					},
					deserializeChangeEntityFieldValueAction: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeChangeEntityFieldValueAction(xmlDoc);
					},
					deserializeLanguageDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLanguageDto(xmlDoc);
					},
					deserializeMoney: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMoney(xmlDoc);
					},
					deserializeMemberKey: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMemberKey(xmlDoc);
					},
					deserializeEvaluationExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEvaluationExpression(xmlDoc);
					},
					deserializeSingleValueExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSingleValueExpression(xmlDoc);
					},
					deserializeScalarValueMemberExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeScalarValueMemberExpression(xmlDoc);
					},
					deserializeArithmeticExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeArithmeticExpression(xmlDoc);
					},
					deserializeMultiplyExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMultiplyExpression(xmlDoc);
					},
					deserializeEntityRelationForInput: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityRelationForInput(xmlDoc);
					},
					deserializeEntityFilterModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityFilterModel(xmlDoc);
					},
					deserializeEntityInfoForExport: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityInfoForExport(xmlDoc);
					},
					deserializeEntityWithCheckOutState: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityWithCheckOutState(xmlDoc);
					},
					deserializeRenameFolderRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRenameFolderRequest(xmlDoc);
					},
					deserializeRemoveItemRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRemoveItemRequest(xmlDoc);
					},
					deserializeAppointmentIdentitiesDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAppointmentIdentitiesDto(xmlDoc);
					},
					deserializeSaveUserWorkspacesDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSaveUserWorkspacesDto(xmlDoc);
					},
					deserializeMessageActionDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMessageActionDto(xmlDoc);
					},
					deserializeMessageType: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMessageType(xmlDoc);
					},
					deserializeUserToGroup: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserToGroup(xmlDoc);
					},
					deserializePredicateExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodePredicateExpression(xmlDoc);
					},
					deserializeLogicalOperationExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLogicalOperationExpression(xmlDoc);
					},
					deserializeLogicalAndExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLogicalAndExpression(xmlDoc);
					},
					deserializeComparisonOperation: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeComparisonOperation(xmlDoc);
					},
					deserializeComparisonExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeComparisonExpression(xmlDoc);
					},
					deserializeEmailReplyDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEmailReplyDto(xmlDoc);
					},
					deserializeSavedEntityIdMapping: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSavedEntityIdMapping(xmlDoc);
					},
					deserializeInputExtraDataRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeInputExtraDataRequest(xmlDoc);
					},
					deserializeUserEntityPropertyValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserEntityPropertyValue(xmlDoc);
					},
					deserializeEntityTypeEntityDtosWithOverview: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeEntityDtosWithOverview(xmlDoc);
					},
					deserializeRenameModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRenameModel(xmlDoc);
					},
					deserializeFolderLinkUsage: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFolderLinkUsage(xmlDoc);
					},
					deserializeDefaultMoney: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDefaultMoney(xmlDoc);
					},
					deserializeExchangeSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeExchangeSettingsDto(xmlDoc);
					},
					deserializeUserUpdatedInformationDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserUpdatedInformationDto(xmlDoc);
					},
					deserializeCheckPermissions: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCheckPermissions(xmlDoc);
					},
					deserializeFileStorageInfo: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFileStorageInfo(xmlDoc);
					},
					deserializeMultipleValueExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMultipleValueExpression(xmlDoc);
					},
					deserializeMemberMultipleValueExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMemberMultipleValueExpression(xmlDoc);
					},
					deserializeLogicalOrExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLogicalOrExpression(xmlDoc);
					},
					deserializeEntityOverviewSpecification: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityOverviewSpecification(xmlDoc);
					},
					deserializeCopyEntitiesRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCopyEntitiesRequest(xmlDoc);
					},
					deserializeUnsavedEntityRelationDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUnsavedEntityRelationDto(xmlDoc);
					},
					deserializeSaveEntityResponse: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSaveEntityResponse(xmlDoc);
					},
					deserializeParentInitializationData: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeParentInitializationData(xmlDoc);
					},
					deserializeParentInitializationDataWithId: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeParentInitializationDataWithId(xmlDoc);
					},
					deserializeLoadEntityForParentRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLoadEntityForParentRequest(xmlDoc);
					},
					deserializeIMetadata: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeIMetadata(xmlDoc);
					},
					deserializeFilterExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFilterExpression(xmlDoc);
					},
					deserializeEntityOverviewGridData: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityOverviewGridData(xmlDoc);
					},
					deserializeChildGridInitData: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeChildGridInitData(xmlDoc);
					},
					deserializeSyncDataModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSyncDataModel(xmlDoc);
					},
					deserializeShareCalendarDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeShareCalendarDto(xmlDoc);
					},
					deserializeWorkflowConditionAction: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWorkflowConditionAction(xmlDoc);
					},
					deserializeWorkflowConditionalBranch: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWorkflowConditionalBranch(xmlDoc);
					},
					deserializeSectorsWithRelatedBranchesInfo: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSectorsWithRelatedBranchesInfo(xmlDoc);
					},
					deserializeShortEmailInfo: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeShortEmailInfo(xmlDoc);
					},
					deserializeEntityConversationLinkDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityConversationLinkDto(xmlDoc);
					},
					deserializeEmailDmsViewDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEmailDmsViewDto(xmlDoc);
					},
					deserializeFolderSubscriptionDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFolderSubscriptionDto(xmlDoc);
					},
					deserializeFolderRemoveModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFolderRemoveModel(xmlDoc);
					},
					deserializeFileDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFileDto(xmlDoc);
					},
					deserializeSyncInfoDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSyncInfoDto(xmlDoc);
					},
					deserializeEmailChange: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEmailChange(xmlDoc);
					},
					deserializeReadFlagChanged: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeReadFlagChanged(xmlDoc);
					},
					deserializeSubFolderChange: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSubFolderChange(xmlDoc);
					},
					deserializeEntityLink: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityLink(xmlDoc);
					},
					deserializeEntityViewDataRow: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityViewDataRow(xmlDoc);
					},
					deserializeSaveExportSettingsRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSaveExportSettingsRequest(xmlDoc);
					},
					deserializeLoadEntityRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLoadEntityRequest(xmlDoc);
					},
					deserializeItemsControlTypes: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeItemsControlTypes(xmlDoc);
					},
					deserializeEntityPropertyDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityPropertyDto(xmlDoc);
					},
					deserializeFolderLinkSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFolderLinkSettingsDto(xmlDoc);
					},
					deserializeDateFieldDefaultValueModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDateFieldDefaultValueModel(xmlDoc);
					},
					deserializeCalendarDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCalendarDto(xmlDoc);
					},
					deserializeAppointmentInviteeDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAppointmentInviteeDto(xmlDoc);
					},
					deserializeCreateEntityRowFieldBinding: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCreateEntityRowFieldBinding(xmlDoc);
					},
					deserializeGetEntityTypesInfo: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeGetEntityTypesInfo(xmlDoc);
					},
					deserializeEntityTypeChangesSubscriptionDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeChangesSubscriptionDto(xmlDoc);
					},
					deserializeUserCredentials: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserCredentials(xmlDoc);
					},
					deserializeSecurityObjectRequestParameter: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSecurityObjectRequestParameter(xmlDoc);
					},
					deserializeRole: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRole(xmlDoc);
					},
					deserializeEntitiesSearchResult: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntitiesSearchResult(xmlDoc);
					},
					deserializeFileCheckOutDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFileCheckOutDto(xmlDoc);
					},
					deserializeFormulaToExpressionConverter: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFormulaToExpressionConverter(xmlDoc);
					},
					deserializeArithmeticExpressionConverter: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeArithmeticExpressionConverter(xmlDoc);
					},
					deserializeMultipleValueConstantExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMultipleValueConstantExpression(xmlDoc);
					},
					deserializeLogicalNotExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLogicalNotExpression(xmlDoc);
					},
					deserializeDivideExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDivideExpression(xmlDoc);
					},
					deserializeSaveEntitiesRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSaveEntitiesRequest(xmlDoc);
					},
					deserializeCollectionEntityPropertyValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCollectionEntityPropertyValue(xmlDoc);
					},
					deserializeValuesListModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeValuesListModel(xmlDoc);
					},
					deserializeEntityDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityDto(xmlDoc);
					},
					deserializeEntityOverviewColumnDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityOverviewColumnDto(xmlDoc);
					},
					deserializeFlatFieldsSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFlatFieldsSettingsDto(xmlDoc);
					},
					deserializeFieldRelationSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFieldRelationSettingsDto(xmlDoc);
					},
					deserializeValidationKeySettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeValidationKeySettingsDto(xmlDoc);
					},
					deserializeAppointmentRecurrenceDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAppointmentRecurrenceDto(xmlDoc);
					},
					deserializeAppointmentRecipientDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAppointmentRecipientDto(xmlDoc);
					},
					deserializeWorkspaceSettinsgsForUserDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWorkspaceSettinsgsForUserDto(xmlDoc);
					},
					deserializeFieldOrConstantValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFieldOrConstantValue(xmlDoc);
					},
					deserializeCreateUserGroupDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCreateUserGroupDto(xmlDoc);
					},
					deserializeRootFolderWithContent: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRootFolderWithContent(xmlDoc);
					},
					deserializeFolderDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFolderDto(xmlDoc);
					},
					deserializeRecipientsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRecipientsDto(xmlDoc);
					},
					deserializeEmailForwardDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEmailForwardDto(xmlDoc);
					},
					deserializeGetOverviewsRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeGetOverviewsRequest(xmlDoc);
					},
					deserializeChildOverviewSpecification: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeChildOverviewSpecification(xmlDoc);
					},
					deserializeReferenceEntityPropertyValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeReferenceEntityPropertyValue(xmlDoc);
					},
					deserializeEntityTypeForInput: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeForInput(xmlDoc);
					},
					deserializeInputFormData: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeInputFormData(xmlDoc);
					},
					deserializeAddChildrenResponse: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAddChildrenResponse(xmlDoc);
					},
					deserializeEntityFieldValidationSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityFieldValidationSettingsDto(xmlDoc);
					},
					deserializeDynamicDefaultValueSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDynamicDefaultValueSettingsDto(xmlDoc);
					},
					deserializeAutonumberValueGenerator: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAutonumberValueGenerator(xmlDoc);
					},
					deserializeDayViewCalendarByAppointmentDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDayViewCalendarByAppointmentDto(xmlDoc);
					},
					deserializeUser: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUser(xmlDoc);
					},
					deserializePagingDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodePagingDto(xmlDoc);
					},
					deserializeEmailReplyAllDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEmailReplyAllDto(xmlDoc);
					},
					deserializeUserFieldDefaultValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserFieldDefaultValue(xmlDoc);
					},
					deserializeParentFieldFilterSettings: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeParentFieldFilterSettings(xmlDoc);
					},
					deserializeRemoveItemResponse: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRemoveItemResponse(xmlDoc);
					},
					deserializeItemRenameModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeItemRenameModel(xmlDoc);
					},
					deserializeDeleteFolderModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDeleteFolderModel(xmlDoc);
					},
					deserializeSingleAppointmentDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSingleAppointmentDto(xmlDoc);
					},
					deserializeWorkflowChangeStatus: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWorkflowChangeStatus(xmlDoc);
					},
					deserializeWizardType: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWizardType(xmlDoc);
					},
					deserializeUserGroupDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserGroupDto(xmlDoc);
					},
					deserializeEmailDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEmailDto(xmlDoc);
					},
					deserializeEntityViewDataWithSettings: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityViewDataWithSettings(xmlDoc);
					},
					deserializeDeleteEntitiesRequestParameters: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDeleteEntitiesRequestParameters(xmlDoc);
					},
					deserializeEntityFieldInfoForExpressionBuilder: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityFieldInfoForExpressionBuilder(xmlDoc);
					},
					deserializeParentControlFields: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeParentControlFields(xmlDoc);
					},
					deserializeEntityTypePermissionsHeir: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypePermissionsHeir(xmlDoc);
					},
					deserializeEntityFieldDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityFieldDto(xmlDoc);
					},
					deserializeIFolder: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeIFolder(xmlDoc);
					},
					deserializeSyncFolderDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSyncFolderDto(xmlDoc);
					},
					deserializeWorkspaceSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWorkspaceSettingsDto(xmlDoc);
					},
					deserializeWorkflow: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWorkflow(xmlDoc);
					},
					deserializeChangePasswordModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeChangePasswordModel(xmlDoc);
					},
					deserializeCreateAccountDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCreateAccountDto(xmlDoc);
					},
					deserializeEvaluatedCopy: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEvaluatedCopy(xmlDoc);
					},
					deserializeEntityTypeImportWizardInfo: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeImportWizardInfo(xmlDoc);
					},
					deserializeSaveEntityRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSaveEntityRequest(xmlDoc);
					},
					deserializeEntitySerializationPackage: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntitySerializationPackage(xmlDoc);
					},
					deserializeEntityTypeWithFormView: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeWithFormView(xmlDoc);
					},
					deserializeCreateFolderModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCreateFolderModel(xmlDoc);
					},
					deserializeRecurrenceExceptionDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRecurrenceExceptionDto(xmlDoc);
					},
					deserializeUsersToGroup: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUsersToGroup(xmlDoc);
					},
					deserializeFolderSearchResult: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFolderSearchResult(xmlDoc);
					},
					deserializePermissionSubjectDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodePermissionSubjectDto(xmlDoc);
					},
					deserializeUserRecipientDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserRecipientDto(xmlDoc);
					},
					deserializeEntityFieldInfoForExport: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityFieldInfoForExport(xmlDoc);
					},
					deserializeDeleteEntityResult: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDeleteEntityResult(xmlDoc);
					},
					deserializeDeleteEntityFailure: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDeleteEntityFailure(xmlDoc);
					},
					deserializeValueItemModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeValueItemModel(xmlDoc);
					},
					deserializeFolderLinkRootFolderRights: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFolderLinkRootFolderRights(xmlDoc);
					},
					deserializeValidationRuleDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeValidationRuleDto(xmlDoc);
					},
					deserializeFormulaDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFormulaDto(xmlDoc);
					},
					deserializeIFile: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeIFile(xmlDoc);
					},
					deserializeValidationKeyPolicySettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeValidationKeyPolicySettingsDto(xmlDoc);
					},
					deserializeClientSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeClientSettingsDto(xmlDoc);
					},
					deserializeSaveAppointmentDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSaveAppointmentDto(xmlDoc);
					},
					deserializeAppointmentsByTermRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAppointmentsByTermRequest(xmlDoc);
					},
					deserializeAppointmentCategoryDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAppointmentCategoryDto(xmlDoc);
					},
					deserializeDummyAction: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDummyAction(xmlDoc);
					},
					deserializeConfigDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeConfigDto(xmlDoc);
					},
					deserializeChangesType: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeChangesType(xmlDoc);
					},
					deserializeMemberExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMemberExpression(xmlDoc);
					},
					deserializeShortAccountInfoDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeShortAccountInfoDto(xmlDoc);
					},
					deserializeCurrentEmailForwardDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCurrentEmailForwardDto(xmlDoc);
					},
					deserializeEntityPropertyDtoForInput: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityPropertyDtoForInput(xmlDoc);
					},
					deserializeEntityOverviewDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityOverviewDto(xmlDoc);
					},
					deserializeSyncFileDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSyncFileDto(xmlDoc);
					},
					deserializeRenameAndMoveModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeRenameAndMoveModel(xmlDoc);
					},
					deserializeFirstLookSharedCalendarData: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFirstLookSharedCalendarData(xmlDoc);
					},
					deserializeCreateEntityRowAction: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCreateEntityRowAction(xmlDoc);
					},
					deserializeUserSettingsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserSettingsDto(xmlDoc);
					},
					deserializeUserProfileDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserProfileDto(xmlDoc);
					},
					deserializeValidateClientUserModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeValidateClientUserModel(xmlDoc);
					},
					deserializeUserGroupPermissions: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserGroupPermissions(xmlDoc);
					},
					deserializeAggregateExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAggregateExpression(xmlDoc);
					},
					deserializeEntityOverviewGridProperties: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityOverviewGridProperties(xmlDoc);
					},
					deserializeShortEntityDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeShortEntityDto(xmlDoc);
					},
					deserializeInputExtraDataResponse: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeInputExtraDataResponse(xmlDoc);
					},
					deserializeDeleteOneEntityRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDeleteOneEntityRequest(xmlDoc);
					},
					deserializeTreeItemMoveDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeTreeItemMoveDto(xmlDoc);
					},
					deserializeUpdateFileModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUpdateFileModel(xmlDoc);
					},
					deserializeUserWithWorskpacesDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeUserWithWorskpacesDto(xmlDoc);
					},
					deserializeSecurityObject: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSecurityObject(xmlDoc);
					},
					deserializeSubtractExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSubtractExpression(xmlDoc);
					},
					deserializeSingleValueConstant: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSingleValueConstant(xmlDoc);
					},
					deserializeEmailAttachmentInfo: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEmailAttachmentInfo(xmlDoc);
					},
					deserializeReceiveDataForEntitiesRequestParameters: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeReceiveDataForEntitiesRequestParameters(xmlDoc);
					},
					deserializeEntityTypesAndViews: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypesAndViews(xmlDoc);
					},
					deserializeScalarEntityPropertyValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeScalarEntityPropertyValue(xmlDoc);
					},
					deserializePrepareChildGridRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodePrepareChildGridRequest(xmlDoc);
					},
					deserializeExportEntitySettings: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeExportEntitySettings(xmlDoc);
					},
					deserializeEntityTypeWithFormViewsDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeWithFormViewsDto(xmlDoc);
					},
					deserializeAutoNumbersFieldSettings: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAutoNumbersFieldSettings(xmlDoc);
					},
					deserializeGroupWithWorkspacesDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeGroupWithWorkspacesDto(xmlDoc);
					},
					deserializeBranchDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeBranchDto(xmlDoc);
					},
					deserializeCreateUserDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeCreateUserDto(xmlDoc);
					},
					deserializeFileRemoveModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFileRemoveModel(xmlDoc);
					},
					deserializeIExpressionEvaluator: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeIExpressionEvaluator(xmlDoc);
					},
					deserializeSumExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSumExpression(xmlDoc);
					},
					deserializeEntityTypeImportSaveResult: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeImportSaveResult(xmlDoc);
					},
					deserializeModifiedAutonumberValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeModifiedAutonumberValue(xmlDoc);
					},
					deserializeEntityFieldInfoForCalculatedField: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityFieldInfoForCalculatedField(xmlDoc);
					},
					deserializeShortEntityTypeDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeShortEntityTypeDto(xmlDoc);
					},
					deserializeLoadInputFormRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLoadInputFormRequest(xmlDoc);
					},
					deserializeFlagsFieldValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFlagsFieldValue(xmlDoc);
					},
					deserializeDateFieldDefaultValueType: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeDateFieldDefaultValueType(xmlDoc);
					},
					deserializeMoveItemModel: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeMoveItemModel(xmlDoc);
					},
					deserializeFirstLookCalendarData: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeFirstLookCalendarData(xmlDoc);
					},
					deserializeConditionOperation: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeConditionOperation(xmlDoc);
					},
					deserializeWorkflowCondition: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeWorkflowCondition(xmlDoc);
					},
					deserializeLanguageInfo: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeLanguageInfo(xmlDoc);
					},
					deserializeGetSubscriptionRequestDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeGetSubscriptionRequestDto(xmlDoc);
					},
					deserializeAvgExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAvgExpression(xmlDoc);
					},
					deserializeAddExpression: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeAddExpression(xmlDoc);
					},
					deserializeSaveUserOverviewRequest: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeSaveUserOverviewRequest(xmlDoc);
					},
					deserializeOverviewAndEntities: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeOverviewAndEntities(xmlDoc);
					},
					deserializeEntityTypeExportData: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeExportData(xmlDoc);
					},
					deserializePrepareChildGridResponse: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodePrepareChildGridResponse(xmlDoc);
					},
					deserializeEntityTypeInfoForExpressionBuilder: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeInfoForExpressionBuilder(xmlDoc);
					},
					deserializeEntityDtoForInput: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityDtoForInput(xmlDoc);
					},
					deserializeEntityFolderLinkValues: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityFolderLinkValues(xmlDoc);
					},
					deserializeEnumFieldValue: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEnumFieldValue(xmlDoc);
					},
					deserializeEntityTypeDto: function(xml) {
						var xmlDoc = parseXml(xml);					
						return deserializeNodeEntityTypeDto(xmlDoc);
					},
				