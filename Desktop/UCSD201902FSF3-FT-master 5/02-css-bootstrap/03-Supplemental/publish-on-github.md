# Steps to Publish a Web Page on Github Pages

1. Create a new repository on Github.
   ([guide](https://help.github.com/articles/create-a-repo/))

   - Check the box to create with a readme file.

2. Open a terminal in the folder to create the repository in on your computer.
   (e.g. `~/Desktop/bootcamp-homework`)

3. Clone the new repository with the following command:

   ```
   git clone <repository-url>
   ```

4. Change the `pwd` (present working directory) to the cloned repository:

   ```
   cd <repository name>
   ```

5. Create a file for the home page:

   ```
   touch index.html
   ```

6. Edit the html file and save your changes.

7. Stage and commit the changes with the following commands.

   ```
   git add -A
   git commit -m "Add home page"
   ```

8. Push the changes to Github.

   ```
   git push origin master
   ```

9. Back in the browser, navigate to the the repository on Github.

10. Click on `Settings`

11. Under the "Github Pages" section of the `Settings` page, set the source to
    the `master` branch and click save.

12. Follow the link that appears under the "Github Pages" section of `Settings`
    to view the web page.
