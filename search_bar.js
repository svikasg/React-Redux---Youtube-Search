[1mdiff --git a/.idea/ReduxSimpleStarter.iml b/.idea/ReduxSimpleStarter.iml[m
[1mindex e0d1e4c..1463eae 100644[m
[1m--- a/.idea/ReduxSimpleStarter.iml[m
[1m+++ b/.idea/ReduxSimpleStarter.iml[m
[36m@@ -3,7 +3,6 @@[m
   <component name="NewModuleRootManager">[m
     <content url="file://$MODULE_DIR$">[m
       <excludeFolder url="file://$MODULE_DIR$/.idea" />[m
[31m-      <excludeFolder url="file://$MODULE_DIR$/node_modules" />[m
     </content>[m
     <orderEntry type="inheritedJdk" />[m
     <orderEntry type="sourceFolder" forTests="false" />[m
[1mdiff --git a/.idea/dictionaries/sgopal.xml b/.idea/dictionaries/sgopal.xml[m
[1mnew file mode 100644[m
[1mindex 0000000..6e060d8[m
[1m--- /dev/null[m
[1m+++ b/.idea/dictionaries/sgopal.xml[m
[36m@@ -0,0 +1,3 @@[m
[32m+[m[32m<component name="ProjectDictionaryState">[m
[32m+[m[32m  <dictionary name="sgopal" />[m
[32m+[m[32m</component>[m
\ No newline at end of file[m
[1mdiff --git a/.idea/inspectionProfiles/Project_Default.xml b/.idea/inspectionProfiles/Project_Default.xml[m
[1mnew file mode 100644[m
[1mindex 0000000..6d6518b[m
[1m--- /dev/null[m
[1m+++ b/.idea/inspectionProfiles/Project_Default.xml[m
[36m@@ -0,0 +1,16 @@[m
[32m+[m[32m<component name="InspectionProjectProfileManager">[m
[32m+[m[32m  <profile version="1.0">[m
[32m+[m[32m    <option name="myName" value="Project Default" />[m
[32m+[m[32m    <inspection_tool class="CoffeeScriptUnusedLocalSymbols" enabled="false" level="WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="JSDeprecatedSymbols" enabled="false" level="WEAK WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="JSTypeOfValues" enabled="false" level="WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="JSUnresolvedFunction" enabled="false" level="WEAK WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="JSUnresolvedVariable" enabled="false" level="WEAK WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="JSUnusedGlobalSymbols" enabled="false" level="WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="JSUnusedLocalSymbols" enabled="false" level="WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="TypeScriptCheckImport" enabled="false" level="ERROR" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="TypeScriptUnresolvedFunction" enabled="false" level="WEAK WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="TypeScriptUnresolvedVariable" enabled="false" level="WEAK WARNING" enabled_by_default="false" />[m
[32m+[m[32m    <inspection_tool class="XsltUnusedDeclaration" enabled="false" level="WARNING" enabled_by_default="false" />[m
[32m+[m[32m  </profile>[m
[32m+[m[32m</component>[m
\ No newline at end of file[m
[1mdiff --git a/.idea/inspectionProfiles/profiles_settings.xml b/.idea/inspectionProfiles/profiles_settings.xml[m
[1mnew file mode 100644[m
[1mindex 0000000..3b31283[m
[1m--- /dev/null[m
[1m+++ b/.idea/inspectionProfiles/profiles_settings.xml[m
[36m@@ -0,0 +1,7 @@[m
[32m+[m[32m<component name="InspectionProjectProfileManager">[m
[32m+[m[32m  <settings>[m
[32m+[m[32m    <option name="PROJECT_PROFILE" value="Project Default" />[m
[32m+[m[32m    <option name="USE_PROJECT_PROFILE" value="true" />[m
[32m+[m[32m    <version value="1.0" />[m
[32m+[m[32m  </settings>[m
[32m+[m[32m</component>[m
\ No newline at end of file[m
[1mdiff --git a/.idea/workspace.xml b/.idea/workspace.xml[m
[1mindex 716b8ca..d338eec 100644[m
[1m--- a/.idea/workspace.xml[m
[1m+++ b/.idea/workspace.xml[m
[36m@@ -1,16 +1,21 @@[m
 <?xml version="1.0" encoding="UTF-8"?>[m
 <project version="4">[m
   <component name="ChangeListManager">[m
[31m-    <list default="true" id="dcb43500-6abd-44f3-ad86-d23500d131c6" name="Default" comment="">[m
[31m-      <change type="NEW" beforePath="" afterPath="$PROJECT_DIR$/src/components/search_bar.js" />[m
[31m-      <change type="NEW" beforePath="" afterPath="$PROJECT_DIR$/src/components/video_detail.js" />[m
[31m-      <change type="NEW" beforePath="" afterPath="$PROJECT_DIR$/src/components/video_list.js" />[m
[31m-      <change type="NEW" beforePath="" afterPath="$PROJECT_DIR$/src/components/video_list_item.js" />[m
[32m+[m[32m    <list default="true" id="dcb43500-6abd-44f3-ad86-d23500d131c6" name="Default" comment="Search Bar set state">[m
[32m+[m[32m      <change type="NEW" beforePath="" afterPath="$PROJECT_DIR$/.idea/dictionaries/sgopal.xml" />[m
[32m+[m[32m      <change type="NEW" beforePath="" afterPath="$PROJECT_DIR$/.idea/inspectionProfiles/Project_Default.xml" />[m
[32m+[m[32m      <change type="NEW" beforePath="" afterPath="$PROJECT_DIR$/.idea/inspectionProfiles/profiles_settings.xml" />[m
       <change type="DELETED" beforePath="$PROJECT_DIR$/src/actions/index.js" afterPath="" />[m
       <change type="DELETED" beforePath="$PROJECT_DIR$/src/components/app.js" afterPath="" />[m
       <change type="DELETED" beforePath="$PROJECT_DIR$/src/reducers/index.js" afterPath="" />[m
[31m-      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/package.json" afterPath="$PROJECT_DIR$/package.json" />[m
[32m+[m[32m      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/.idea/ReduxSimpleStarter.iml" afterPath="$PROJECT_DIR$/.idea/ReduxSimpleStarter.iml" />[m
[32m+[m[32m      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/.idea/workspace.xml" afterPath="$PROJECT_DIR$/.idea/workspace.xml" />[m
[32m+[m[32m      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/src/components/search_bar.js" afterPath="$PROJECT_DIR$/src/components/search_bar.js" />[m
[32m+[m[32m      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/src/components/video_detail.js" afterPath="$PROJECT_DIR$/src/components/video_detail.js" />[m
[32m+[m[32m      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/src/components/video_list.js" afterPath="$PROJECT_DIR$/src/components/video_list.js" />[m
[32m+[m[32m      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/src/components/video_list_item.js" afterPath="$PROJECT_DIR$/src/components/video_list_item.js" />[m
       <change type="MODIFICATION" beforePath="$PROJECT_DIR$/src/index.js" afterPath="$PROJECT_DIR$/src/index.js" />[m
[32m+[m[32m      <change type="MODIFICATION" beforePath="$PROJECT_DIR$/style/style.css" afterPath="$PROJECT_DIR$/style/style.css" />[m
     </list>[m
     <ignored path="ReduxSimpleStarter.iws" />[m
     <ignored path=".idea/workspace.xml" />[m
[36m@@ -34,8 +39,18 @@[m
       <file leaf-file-name="index.js" pinned="false" current-in-tab="true">[m
         <entry file="file://$PROJECT_DIR$/src/index.js">[m
           <provider selected="true" editor-type-id="text-editor">[m
[31m-            <state vertical-scroll-proportion="0.26143792">[m
[31m-              <caret line="16" column="0" selection-start-line="16" selection-start-column="0" selection-end-line="16" selection-end-column="0" />[m
[32m+[m[32m            <state vertical-scroll-proportion="0.6388309">[m
[32m+[m[32m              <caret line="36" column="56" selection-start-line="36" selection-start-column="56" selection-end-line="36" selection-end-column="56" />[m
[32m+[m[32m              <folding />[m
[32m+[m[32m            </state>[m
[32m+[m[32m          </provider>[m
[32m+[m[32m        </entry>[m
[32m+[m[32m      </file>[m
[32m+[m[32m      <file leaf-file-name="video_list.js" pinned="false" current-in-tab="false">[m
[32m+[m[32m        <entry file="file://$PROJECT_DIR$/src/components/video_list.js">[m
[32m+[m[32m          <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m            <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m              <caret line="18" column="25" selection-start-line="18" selection-start-column="25" selection-end-line="18" selection-end-column="25" />[m
               <folding />[m
             </state>[m
           </provider>[m
[36m@@ -45,12 +60,36 @@[m
         <entry file="file://$PROJECT_DIR$/src/components/search_bar.js">[m
           <provider selected="true" editor-type-id="text-editor">[m
             <state vertical-scroll-proportion="0.0">[m
[31m-              <caret line="6" column="15" selection-start-line="6" selection-start-column="15" selection-end-line="6" selection-end-column="15" />[m
[32m+[m[32m              <caret line="21" column="26" selection-start-line="21" selection-start-column="26" selection-end-line="21" selection-end-column="26" />[m
               <folding />[m
             </state>[m
           </provider>[m
         </entry>[m
       </file>[m
[32m+[m[32m      <file leaf-file-name="video_list_item.js" pinned="false" current-in-tab="false">[m
[32m+[m[32m        <entry file="file://$PROJECT_DIR$/src/components/video_list_item.js">[m
[32m+[m[32m          <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m            <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m              <caret line="21" column="29" selection-start-line="21" selection-start-column="29" selection-end-line="21" selection-end-column="29" />[m
[32m+[m[32m              <folding />[m
[32m+[m[32m            </state>[m
[32m+[m[32m          </provider>[m
[32m+[m[32m        </entry>[m
[32m+[m[32m      </file>[m
[32m+[m[32m      <file leaf-file-name="video_detail.js" pinned="false" current-in-tab="false">[m
[32m+[m[32m        <entry file="file://$PROJECT_DIR$/src/components/video_detail.js">[m
[32m+[m[32m          <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m            <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m              <caret line="23" column="27" selection-start-line="23" selection-start-column="27" selection-end-line="23" selection-end-column="27" />[m
[32m+[m[32m              <folding>[m
[32m+[m[32m                <marker date="1458077249580" expanded="true" signature="261:552" placeholder="..." />[m
[32m+[m[32m                <marker date="1458077249580" expanded="true" signature="325:408" placeholder="..." />[m
[32m+[m[32m                <marker date="1458077249580" expanded="true" signature="440:541" placeholder="..." />[m
[32m+[m[32m              </folding>[m
[32m+[m[32m            </state>[m
[32m+[m[32m          </provider>[m
[32m+[m[32m        </entry>[m
[32m+[m[32m      </file>[m
     </leaf>[m
   </component>[m
   <component name="FileTemplateManagerImpl">[m
[36m@@ -61,13 +100,22 @@[m
     </option>[m
   </component>[m
   <component name="Git.Settings">[m
[32m+[m[32m    <option name="PREVIOUS_COMMIT_AUTHORS">[m
[32m+[m[32m      <list>[m
[32m+[m[32m        <option value="Sai Vikas Gopal" />[m
[32m+[m[32m      </list>[m
[32m+[m[32m    </option>[m
     <option name="RECENT_GIT_ROOT_PATH" value="$PROJECT_DIR$" />[m
   </component>[m
   <component name="IdeDocumentHistory">[m
     <option name="CHANGED_PATHS">[m
       <list>[m
         <option value="$PROJECT_DIR$/index.html" />[m
[32m+[m[32m        <option value="$PROJECT_DIR$/.idea/workspace.xml" />[m
[32m+[m[32m        <option value="$PROJECT_DIR$/src/components/video_detail.js" />[m
[32m+[m[32m        <option value="$PROJECT_DIR$/src/components/video_list.js" />[m
         <option value="$PROJECT_DIR$/src/components/video_list_item.js" />[m
[32m+[m[32m        <option value="$PROJECT_DIR$/style/style.css" />[m
         <option value="$PROJECT_DIR$/src/components/search_bar.js" />[m
         <option value="$PROJECT_DIR$/src/index.js" />[m
       </list>[m
[36m@@ -81,10 +129,44 @@[m
     <detection-done>true</detection-done>[m
   </component>[m
   <component name="ProjectFrameBounds">[m
[31m-    <option name="x" value="-8" />[m
[32m+[m[32m    <option name="x" value="1912" />[m
     <option name="y" value="-8" />[m
     <option name="width" value="1936" />[m
[31m-    <option name="height" value="1056" />[m
[32m+[m[32m    <option name="height" value="1096" />[m
[32m+[m[32m  </component>[m
[32m+[m[32m  <component name="ProjectInspectionProfilesVisibleTreeState">[m
[32m+[m[32m    <entry key="Project Default">[m
[32m+[m[32m      <profile-state>[m
[32m+[m[32m        <expanded-state>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id />[m
[32m+[m[32m          </State>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id>CoffeeScript</id>[m
[32m+[m[32m          </State>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id>GeneralCoffeeScript</id>[m
[32m+[m[32m          </State>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id>GeneralJavaScript</id>[m
[32m+[m[32m          </State>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id>JavaScript</id>[m
[32m+[m[32m          </State>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id>Probable bugsJavaScript</id>[m
[32m+[m[32m          </State>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id>RELAX NG</id>[m
[32m+[m[32m          </State>[m
[32m+[m[32m        </expanded-state>[m
[32m+[m[32m        <selected-state>[m
[32m+[m[32m          <State>[m
[32m+[m[32m            <id>JSTypeOfValues</id>[m
[32m+[m[32m          </State>[m
[32m+[m[32m        </selected-state>[m
[32m+[m[32m      </profile-state>[m
[32m+[m[32m    </entry>[m
   </component>[m
   <component name="ProjectLevelVcsManager" settingsEditedManually="false">[m
     <OptionsSetting value="true" id="Add" />[m
[36m@@ -116,6 +198,7 @@[m
         <subPane subId="Project Files" />[m
         <subPane subId="Tests" />[m
       </pane>[m
[32m+[m[32m      <pane id="Scratches" />[m
       <pane id="ProjectPane">[m
         <subPane>[m
           <PATH>[m
[36m@@ -130,21 +213,7 @@[m
               <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.ProjectViewProjectNode" />[m
             </PATH_ELEMENT>[m
             <PATH_ELEMENT>[m
[31m-              <option name="myItemId" value="ReduxSimpleStarter" />[m
[31m-              <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.PsiDirectoryNode" />[m
[31m-            </PATH_ELEMENT>[m
[31m-          </PATH>[m
[31m-          <PATH>[m
[31m-            <PATH_ELEMENT>[m
[31m-              <option name="myItemId" value="ReduxSimpleStarter" />[m
[31m-              <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.ProjectViewProjectNode" />[m
[31m-            </PATH_ELEMENT>[m
[31m-            <PATH_ELEMENT>[m
[31m-              <option name="myItemId" value="ReduxSimpleStarter" />[m
[31m-              <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.PsiDirectoryNode" />[m
[31m-            </PATH_ELEMENT>[m
[31m-            <PATH_ELEMENT>[m
[31m-              <option name="myItemId" value="src" />[m
[32m+[m[32m              <option name="myItemId" value="React Redux - Youtube Search" />[m
               <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.PsiDirectoryNode" />[m
             </PATH_ELEMENT>[m
           </PATH>[m
[36m@@ -154,25 +223,20 @@[m
               <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.ProjectViewProjectNode" />[m
             </PATH_ELEMENT>[m
             <PATH_ELEMENT>[m
[31m-              <option name="myItemId" value="ReduxSimpleStarter" />[m
[32m+[m[32m              <option name="myItemId" value="React Redux - Youtube Search" />[m
               <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.PsiDirectoryNode" />[m
             </PATH_ELEMENT>[m
             <PATH_ELEMENT>[m
[31m-              <option name="myItemId" value="src" />[m
[31m-              <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.PsiDirectoryNode" />[m
[31m-            </PATH_ELEMENT>[m
[31m-            <PATH_ELEMENT>[m
[31m-              <option name="myItemId" value="components" />[m
[32m+[m[32m              <option name="myItemId" value="style" />[m
               <option name="myItemType" value="com.intellij.ide.projectView.impl.nodes.PsiDirectoryNode" />[m
             </PATH_ELEMENT>[m
           </PATH>[m
         </subPane>[m
       </pane>[m
[31m-      <pane id="Scratches" />[m
     </panes>[m
   </component>[m
   <component name="PropertiesComponent">[m
[31m-    <property name="settings.editor.selected.configurable" value="preferences.pluginManager" />[m
[32m+[m[32m    <property name="settings.editor.selected.configurable" value="Errors" />[m
     <property name="settings.editor.splitter.proportion" value="0.2" />[m
     <property name="last_opened_file_path" value="$PROJECT_DIR$" />[m
     <property name="WebServerToolWindowFactoryState" value="false" />[m
[36m@@ -180,6 +244,8 @@[m
     <property name="js-jscs-nodeInterpreter" value="C:\Program Files\nodejs\node.exe" />[m
     <property name="JavaScriptPreferStrict" value="false" />[m
     <property name="JavaScriptWeakerCompletionTypeGuess" value="true" />[m
[32m+[m[32m    <property name="js.eslint.nodeInterpreter" value="C:\Program Files\nodejs\node.exe" />[m
[32m+[m[32m    <property name="js.eslint.eslintPackage" value="" />[m
   </component>[m
   <component name="RecentsManager">[m
     <key name="CopyFile.RECENT_KEYS">[m
[36m@@ -210,6 +276,11 @@[m
       <method />[m
     </configuration>[m
     <configuration default="true" type="js.build_tools.gulp" factoryName="Gulp.js">[m
[32m+[m[32m      <node-options />[m
[32m+[m[32m      <gulpfile />[m
[32m+[m[32m      <tasks />[m
[32m+[m[32m      <arguments />[m
[32m+[m[32m      <envs />[m
       <method />[m
     </configuration>[m
     <configuration default="true" type="js.build_tools.npm" factoryName="npm">[m
[36m@@ -242,6 +313,13 @@[m
       <option name="number" value="Default" />[m
       <updated>1457979280335</updated>[m
     </task>[m
[32m+[m[32m    <task id="LOCAL-00001" summary="Search Bar set state">[m
[32m+[m[32m      <created>1458066760880</created>[m
[32m+[m[32m      <option name="number" value="00001" />[m
[32m+[m[32m      <option name="project" value="LOCAL" />[m
[32m+[m[32m      <updated>1458066760880</updated>[m
[32m+[m[32m    </task>[m
[32m+[m[32m    <option name="localTasksCounter" value="2" />[m
     <servers />[m
   </component>[m
   <component name="TodoView">[m
[36m@@ -254,7 +332,7 @@[m
     </todo-panel>[m
   </component>[m
   <component name="ToolWindowManager">[m
[31m-    <frame x="-8" y="-8" width="1936" height="1056" extended-state="6" />[m
[32m+[m[32m    <frame x="1912" y="-8" width="1936" height="1096" extended-state="6" />[m
     <editor active="true" />[m
     <layout>[m
       <window_info id="Project" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="true" show_stripe_button="true" weight="0.17755532" sideWeight="0.487315" order="0" side_tool="false" content_ui="tabs" />[m
[36m@@ -262,13 +340,14 @@[m
       <window_info id="Event Log" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.33" sideWeight="0.5" order="7" side_tool="true" content_ui="tabs" />[m
       <window_info id="Find" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.33" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />[m
       <window_info id="npm" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.17755532" sideWeight="0.512685" order="2" side_tool="true" content_ui="tabs" />[m
[31m-      <window_info id="Version Control" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.4290061" sideWeight="0.5" order="7" side_tool="false" content_ui="tabs" />[m
[32m+[m[32m      <window_info id="Version Control" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.005070994" sideWeight="0.5" order="7" side_tool="false" content_ui="tabs" />[m
       <window_info id="Run" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.33" sideWeight="0.5" order="2" side_tool="false" content_ui="tabs" />[m
       <window_info id="Structure" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.25" sideWeight="0.5" order="1" side_tool="false" content_ui="tabs" />[m
[31m-      <window_info id="Terminal" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.5676533" sideWeight="0.5" order="7" side_tool="false" content_ui="tabs" />[m
[32m+[m[32m      <window_info id="Terminal" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.36004058" sideWeight="0.5" order="7" side_tool="false" content_ui="tabs" />[m
       <window_info id="Favorites" active="false" anchor="left" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.33" sideWeight="0.5" order="2" side_tool="true" content_ui="tabs" />[m
       <window_info id="Debug" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.4" sideWeight="0.5" order="3" side_tool="false" content_ui="tabs" />[m
       <window_info id="Cvs" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.25" sideWeight="0.5" order="4" side_tool="false" content_ui="tabs" />[m
[32m+[m[32m      <window_info id="Messages" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.32980973" sideWeight="0.5" order="7" side_tool="false" content_ui="tabs" />[m
       <window_info id="Message" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.33" sideWeight="0.5" order="0" side_tool="false" content_ui="tabs" />[m
       <window_info id="Commander" active="false" anchor="right" auto_hide="false" internal_type="SLIDING" type="SLIDING" visible="false" show_stripe_button="true" weight="0.4" sideWeight="0.5" order="0" side_tool="false" content_ui="tabs" />[m
       <window_info id="Inspection" active="false" anchor="bottom" auto_hide="false" internal_type="DOCKED" type="DOCKED" visible="false" show_stripe_button="true" weight="0.4" sideWeight="0.5" order="5" side_tool="false" content_ui="tabs" />[m
[36m@@ -287,28 +366,50 @@[m
   <component name="VcsContentAnnotationSettings">[m
     <option name="myLimit" value="2678400000" />[m
   </component>[m
[32m+[m[32m  <component name="VcsManagerConfiguration">[m
[32m+[m[32m    <MESSAGE value="Search Bar set state" />[m
[32m+[m[32m    <option name="LAST_COMMIT_MESSAGE" value="Search Bar set state" />[m
[32m+[m[32m  </component>[m
   <component name="XDebuggerManager">[m
[31m-    <breakpoint-manager />[m
[32m+[m[32m    <breakpoint-manager>[m
[32m+[m[32m      <option name="time" value="1" />[m
[32m+[m[32m    </breakpoint-manager>[m
     <watches-manager />[m
   </component>[m
   <component name="editorHistoryManager">[m
     <entry file="file://$PROJECT_DIR$/src/index.js">[m
       <provider selected="true" editor-type-id="text-editor">[m
         <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="0" column="6" selection-start-line="0" selection-start-column="6" selection-end-line="0" selection-end-column="6" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/video_list.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="19" column="25" selection-start-line="19" selection-start-column="25" selection-end-line="19" selection-end-column="25" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/video_list_item.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
           <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
           <folding />[m
         </state>[m
       </provider>[m
     </entry>[m
[31m-    <entry file="file://$PROJECT_DIR$/index.html">[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/search_bar.js">[m
       <provider selected="true" editor-type-id="text-editor">[m
[31m-        <state vertical-scroll-proportion="0.29411766">[m
[31m-          <caret line="7" column="8" selection-start-line="7" selection-start-column="8" selection-end-line="7" selection-end-column="8" />[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
           <folding />[m
         </state>[m
       </provider>[m
     </entry>[m
[31m-    <entry file="file://$PROJECT_DIR$/src/components/video_detail.js">[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/index.js">[m
       <provider selected="true" editor-type-id="text-editor">[m
         <state vertical-scroll-proportion="0.0">[m
           <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[36m@@ -316,7 +417,15 @@[m
         </state>[m
       </provider>[m
     </entry>[m
[31m-    <entry file="file://$PROJECT_DIR$/src/components/video_list.js">[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/search_bar.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="9" column="25" selection-start-line="9" selection-start-column="25" selection-end-line="9" selection-end-column="25" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/index.js">[m
       <provider selected="true" editor-type-id="text-editor">[m
         <state vertical-scroll-proportion="0.0">[m
           <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[36m@@ -324,18 +433,152 @@[m
         </state>[m
       </provider>[m
     </entry>[m
[31m-    <entry file="file://$PROJECT_DIR$/src/components/video_list_item.js">[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/search_bar.js">[m
       <provider selected="true" editor-type-id="text-editor">[m
[31m-        <state vertical-scroll-proportion="0.01565762">[m
[31m-          <caret line="3" column="0" selection-start-line="3" selection-start-column="0" selection-end-line="3" selection-end-column="0" />[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="6" column="1" selection-start-line="6" selection-start-column="1" selection-end-line="6" selection-end-column="1" />[m
           <folding />[m
         </state>[m
       </provider>[m
     </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/index.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/index.html">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.29411766">[m
[32m+[m[32m          <caret line="7" column="8" selection-start-line="7" selection-start-column="8" selection-end-line="7" selection-end-column="8" />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
     <entry file="file://$PROJECT_DIR$/package.json">[m
       <provider selected="true" editor-type-id="text-editor">[m
         <state vertical-scroll-proportion="0.7593583">[m
           <caret line="37" column="0" selection-start-line="37" selection-start-column="0" selection-end-line="37" selection-end-column="0" />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/PATENTS">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/README.md">[m
[32m+[m[32m      <provider editor-type-id="MultiMarkdownFxPreviewEditor">[m
[32m+[m[32m        <state />[m
[32m+[m[32m      </provider>[m
[32m+[m[32m      <provider selected="true" editor-type-id="split-provider[text-editor;MultiMarkdownPreviewEditor]">[m
[32m+[m[32m        <state split_layout="FIRST">[m
[32m+[m[32m          <first_editor vertical-scroll-proportion="0.4340278">[m
[32m+[m[32m            <caret line="23" column="0" selection-start-line="23" selection-start-column="0" selection-end-line="23" selection-end-column="0" />[m
[32m+[m[32m            <folding />[m
[32m+[m[32m          </first_editor>[m
[32m+[m[32m          <second_editor />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/lib/EventConstants.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/lib/findDOMNode.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.83242655">[m
[32m+[m[32m          <caret line="48" column="29" selection-start-line="48" selection-start-column="29" selection-end-line="48" selection-end-column="29" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/lib/getEventKey.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="-0.7627856">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/lib/update.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="-0.94232863">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/lib/SyntheticUIEvent.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="-0.0609358">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/lib/setInnerHTML.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m          <folding>[m
[32m+[m[32m            <element signature="n#!!doc" expanded="false" />[m
[32m+[m[32m          </folding>[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/node_modules/react/lib/setTextContent.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="0" column="0" selection-start-line="0" selection-start-column="0" selection-end-line="0" selection-end-column="0" />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/.idea/workspace.xml">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.28907922">[m
[32m+[m[32m          <caret line="137" column="36" selection-start-line="137" selection-start-column="36" selection-end-line="137" selection-end-column="36" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/video_detail.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="23" column="27" selection-start-line="23" selection-start-column="27" selection-end-line="23" selection-end-column="27" />[m
[32m+[m[32m          <folding>[m
[32m+[m[32m            <marker date="1458077249580" expanded="true" signature="261:552" placeholder="..." />[m
[32m+[m[32m            <marker date="1458077249580" expanded="true" signature="325:408" placeholder="..." />[m
[32m+[m[32m            <marker date="1458077249580" expanded="true" signature="440:541" placeholder="..." />[m
[32m+[m[32m          </folding>[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/video_list_item.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="21" column="29" selection-start-line="21" selection-start-column="29" selection-end-line="21" selection-end-column="29" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/style/style.css">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="-17.653847">[m
[32m+[m[32m          <caret line="27" column="1" selection-start-line="27" selection-start-column="1" selection-end-line="27" selection-end-column="1" />[m
[32m+[m[32m          <folding />[m
[32m+[m[32m        </state>[m
[32m+[m[32m      </provider>[m
[32m+[m[32m    </entry>[m
[32m+[m[32m    <entry file="file://$PROJECT_DIR$/src/components/video_list.js">[m
[32m+[m[32m      <provider selected="true" editor-type-id="text-editor">[m
[32m+[m[32m        <state vertical-scroll-proportion="0.0">[m
[32m+[m[32m          <caret line="18" column="25" selection-start-line="18" selection-start-column="25" selection-end-line="18" selection-end-column="25" />[m
           <folding />[m
         </state>[m
       </provider>[m
[36m@@ -343,15 +586,15 @@[m
     <entry file="file://$PROJECT_DIR$/src/components/search_bar.js">[m
       <provider selected="true" editor-type-id="text-editor">[m
         <state vertical-scroll-proportion="0.0">[m
[31m-          <caret line="6" column="15" selection-start-line="6" selection-start-column="15" selection-end-line="6" selection-end-column="15" />[m
[32m+[m[32m          <caret line="21" column="26" selection-start-line="21" selection-start-column="26" selection-end-line="21" selection-end-column="26" />[m
           <folding />[m
         </state>[m
       </provider>[m
     </entry>[m
     <entry file="file://$PROJECT_DIR$/src/index.js">[m
       <provider selected="true" editor-type-id="text-editor">[m
[31m-        <state vertical-scroll-proportion="0.26143792">[m
[31m-          <caret line="16" column="0" selection-start-line="16" selection-start-column="0" selection-end-line="16" selection-end-column="0" />[m
[32m+[m[32m        <state vertical-scroll-proportion="0.6388309">[m
[32m+[m[32m          <caret line="36" column="56" selection-start-line="36" selection-start-column="56" selection-end-line="36" selection-end-column="56" />[m
           <folding />[m
         </state>[m
       </provider>[m
[1mdiff --git a/src/actions/index.js b/src/actions/index.js[m
[1mdeleted file mode 100644[m
[1mindex e69de29..0000000[m
[1mdiff --git a/src/components/app.js b/src/components/app.js[m
[1mdeleted file mode 100644[m
[1mindex 27ca5cc..0000000[m
[1m--- a/src/components/app.js[m
[1m+++ /dev/null[m
[36m@@ -1,10 +0,0 @@[m
[31m-import React from 'react';[m
[31m-import { Component } from 'react';[m
[31m-[m
[31m-export default class App extends Component {[m
[31m-  render() {[m
[31m-    return ([m
[31m-      <div>React simple starter</div>[m
[31m-    );[m
[31m-  }[m
[31m-}[m
[1mdiff --git a/src/components/search_bar.js b/src/components/search_bar.js[m
[1mindex 67cf4df..32a1a7d 100644[m
[1m--- a/src/components/search_bar.js[m
[1m+++ b/src/components/search_bar.js[m
[36m@@ -10,14 +10,18 @@[m [mclass SearchBar extends Component {[m
 [m
   render () {[m
     return ([m
[31m-      <div>[m
[32m+[m[32m      <div className="search-bar">[m
         <input[m
           value = {this.state.term}[m
[31m-          onChange = {event => this.setState({term: event.target.value})}/>[m
[31m-        <p> Value of the Input: { this.state.term } </p>[m
[32m+[m[32m          onChange = {event => this.onInputChange(event.target.value)}/>[m
       </div>[m
     );[m
   }[m
[32m+[m
[32m+[m[32m  onInputChange(term) {[m
[32m+[m[32m    this.setState({term});[m
[32m+[m[32m    this.props.onSearchTermChange(term);[m
[32m+[m[32m  }[m
 }[m
 [m
 export default SearchBar;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/video_detail.js b/src/components/video_detail.js[m
[1mindex e69de29..135fba3 100644[m
[1m--- a/src/components/video_detail.js[m
[1m+++ b/src/components/video_detail.js[m
[36m@@ -0,0 +1,24 @@[m
[32m+[m[32mimport React from 'react';[m
[32m+[m
[32m+[m[32mconst VideoDetail = ({video}) => {[m
[32m+[m[32m  if (!video) {[m
[32m+[m[32m    return <div>Loading...</div>[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  const videoId = video.id.videoId;[m
[32m+[m[32m  const url = `https://youtube.com/embed/${videoId}`;[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <div className="video=detail col-md-8">[m
[32m+[m[32m      <div className="embed-responsive embed-responsive-16by9">[m
[32m+[m[32m        <iframe src={url} className="embed-responsive-item"></iframe>[m
[32m+[m[32m      </div>[m
[32m+[m[32m      <div className="details">[m
[32m+[m[32m        <div>{video.snippet.title}</div>[m
[32m+[m[32m        <div>{video.snippet.description}</div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  )[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default VideoDetail;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/video_list.js b/src/components/video_list.js[m
[1mindex e69de29..02345bd 100644[m
[1m--- a/src/components/video_list.js[m
[1m+++ b/src/components/video_list.js[m
[36m@@ -0,0 +1,19 @@[m
[32m+[m[32mimport React from 'react'[m
[32m+[m[32mimport VideoListItem from './video_list_item';[m
[32m+[m
[32m+[m[32mconst VideoList = (props) => {[m
[32m+[m[32m  const videoItems = props.videos.map((video) => {[m
[32m+[m[32m    return <VideoListItem[m
[32m+[m[32m      onVideoSelect = {props.onVideoSelect}[m
[32m+[m[32m      key={video.etag}[m
[32m+[m[32m      video={video} />[m
[32m+[m[32m  });[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <ul className="col-md-4 list-group">[m
[32m+[m[32m      {videoItems}[m
[32m+[m[32m    </ul>[m
[32m+[m[32m  )[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default VideoList;[m
\ No newline at end of file[m
[1mdiff --git a/src/components/video_list_item.js b/src/components/video_list_item.js[m
[1mindex 35ac620..5f613e7 100644[m
[1m--- a/src/components/video_list_item.js[m
[1m+++ b/src/components/video_list_item.js[m
[36m@@ -1,3 +1,22 @@[m
[31m-/**[m
[31m- * Created by sgopal on 3/14/2016.[m
[31m- */[m
[32m+[m[32mimport React from 'react';[m
[32m+[m
[32m+[m[32mconst VideoListItem = ({video, onVideoSelect}) => {[m
[32m+[m
[32m+[m[32m  const imageUrl = video.snippet.thumbnails.default.url;[m
[32m+[m
[32m+[m[32m  return ([m
[32m+[m[32m    <li onClick = {() => onVideoSelect(video)} className = "list-group-item">[m
[32m+[m[32m      <div className = "video-list media">[m
[32m+[m[32m        <div className = "media-left">[m
[32m+[m[32m          <img className = "media-object" src={imageUrl} />[m
[32m+[m[32m        </div>[m
[32m+[m
[32m+[m[32m        <div className = "media-body">[m
[32m+[m[32m          <div className = "media-heading">{video.snippet.title}</div>[m
[32m+[m[32m        </div>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </li>[m
[32m+[m[32m  )[m
[32m+[m[32m};[m
[32m+[m
[32m+[m[32mexport default VideoListItem;[m
\ No newline at end of file[m
[1mdiff --git a/src/index.js b/src/index.js[m
[1mindex ff91fdb..61fd2af 100644[m
[1m--- a/src/index.js[m
[1m+++ b/src/index.js[m
[36m@@ -1,17 +1,47 @@[m
[31m-import React from 'react';[m
[32m+[m[32mimport _ from 'lodash';[m
[32m+[m[32mimport React, { Component } from 'react';[m
 import ReactDOM from 'react-dom';[m
[31m-[m
[32m+[m[32mimport YTSearch from 'youtube-api-search';[m
[32m+[m[32mimport VideoList from './components/video_list';[m
[32m+[m[32mimport VideoDetail from './components/video_detail';[m
 import SearchBar from './components/search_bar';[m
[31m-[m
 const YOUTUBE_API_KEY = 'AIzaSyAOJ3usoBk6PjjAh2IJywTPfcdVK7huV4E';[m
 [m
 [m
[31m-const App = () => {[m
[31m-  return <div>[m
[31m-    Hi There! <br />[m
[31m-    <SearchBar />[m
[31m-  </div>;[m
[31m-};[m
[32m+[m[32mclass App  extends Component {[m
[32m+[m[32m  constructor(props) {[m
[32m+[m[32m    super(props);[m
[32m+[m
[32m+[m[32m    this.state = {[m
[32m+[m[32m      videos: [],[m
[32m+[m[32m      selectedVideo: null[m
[32m+[m[32m    };[m
[32m+[m
[32m+[m[32m    this.videoSearch('metallica');[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  videoSearch (term) {[m
[32m+[m[32m    YTSearch({key: YOUTUBE_API_KEY, term: term}, (data) => {[m
[32m+[m[32m      this.setState({[m
[32m+[m[32m        videos : data,[m
[32m+[m[32m        selectedVideo: data[0][m
[32m+[m[32m      });[m
[32m+[m[32m    });[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  render () {[m
[32m+[m[32m    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 1000);[m
 [m
[32m+[m[32m    return ([m
[32m+[m[32m      <div>[m
[32m+[m[32m        <SearchBar onSearchTermChange = {videoSearch} />[m
[32m+[m[32m        <VideoDetail video={this.state.selectedVideo}/>[m
[32m+[m[32m        <VideoList[m
[32m+[m[32m          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}[m
[32m+[m[32m          videos = {this.state.videos} />[m
[32m+[m[32m      </div>[m
[32m+[m[32m    );[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
 [m
 ReactDOM.render(<App />, document.querySelector('.container'));[m
[1mdiff --git a/src/reducers/index.js b/src/reducers/index.js[m
[1mdeleted file mode 100644[m
[1mindex d12506f..0000000[m
[1m--- a/src/reducers/index.js[m
[1m+++ /dev/null[m
[36m@@ -1,7 +0,0 @@[m
[31m-import { combineReducers } from 'redux';[m
[31m-[m
[31m-const rootReducer = combineReducers({[m
[31m-  state: (state = {}) => state[m
[31m-});[m
[31m-[m
[31m-export default rootReducer;[m
[1mdiff --git a/style/style.css b/style/style.css[m
[1mindex e69de29..de89d05 100644[m
[1m--- a/style/style.css[m
[1m+++ b/style/style.css[m
[36m@@ -0,0 +1,28 @@[m
[32m+[m[32m.search-bar {[m
[32m+[m[32m  margin: 20px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.search-bar input {[m
[32m+[m[32m  width: 75%;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.video-item img {[m
[32m+[m[32m  max-width: 64px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.video-detail .details {[m
[32m+[m[32m  margin-top: 10px;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  border: 1px solid #ddd;[m
[32m+[m[32m  border-radius: 4px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m.list-group-item {[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.list-group-item:hover {[m
[32m+[m[32m  background-color: #eee;[m
[32m+[m[32m}[m
\ No newline at end of file[m
warning: LF will be replaced by CRLF in .idea/ReduxSimpleStarter.iml.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in .idea/workspace.xml.
The file will have its original line endings in your working directory.
