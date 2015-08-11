For now, I'm going to follow nambrot and place the package.json within the /app/assets folder. 

This means that all of my javascript will be within the normal /app/assets/javascripts folder, and I will need to make sure that rails's application.js doesn't pick up both the source files and the webpack generated client bundle. 