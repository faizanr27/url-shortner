const express = require('express')
const router = express.Router();
const Url = require('../models/url.models');
const verifyToken = require('../middleware/auth.middleware')
const makeid = require('../utils/randomString.utils')
require('dotenv').config

// router.post('/api/shorten', verifyToken, async(req, res) => {
// try {
//         const { uri } = req.body;
//         console.log(`Received URL: ${uri}`);
//         // console.log(req)

//         const existingUrl = await Url.findOne({userId: req.userId, originalUrl: uri})

//         if(existingUrl){
//             res.status(200).json({ shortenedUrl: existingUrl.shortenedUrl });
//         }
//         else{
//             const randomString = makeid();
//             const shortenedUrl = 'https://Short.sy/'.concat(randomString);

//             const newUrl = new Url({
//                 shortenedUrl,
//                 originalUrl: uri,
//                 userId: req.userId
//             })
//             await newUrl.save()
//             console.log(newUrl)
//             console.log(`Generated Shortened URL: ${shortenedUrl}`);
//             res.status(201).json({ shortenedUrl });
//         }

//     } catch (error) {
//         console.error("Error:", error); 
//         res.status(500).json({ message: "Server error." });
//     }
//   });
  
// router.get('/api/:url', async (req, res) => {
// try {
//         const { url } = req.params;
//         // console.log(url)
//         const shortenedUrl = await Url.findOne({shortenedUrl: `https://Short.sy/${url}` })
      
//         if (shortenedUrl) {
//           res.redirect(shortenedUrl.originalUrl);
//         } else {
//           res.status(404).send('URL not found');
//         }
// } catch (error) {
//     console.error(error); 
//     res.status(500).json({ message: "Server error." });
// }
//   });

router.post('/api/shorten', verifyToken, async(req, res) => {
  try {
    const { uri } = req.body;
    console.log(`Received URL: ${uri}`);

    const existingUrl = await Url.findOne({userId: req.userId, originalUrl: uri})

    if(existingUrl){
      console.log('Existing URL found:', existingUrl);
      return res.status(200).json({ shortenedUrl: existingUrl.shortenedUrl });
    }
    else{
      const randomString = makeid();
      const shortenedUrl = `${req.protocol}://${req.get('host')}/${randomString}`;

      const newUrl = new Url({
        shortenedUrl,
        originalUrl: uri,
        userId: req.userId
      })
      await newUrl.save()
      console.log('New URL saved:', newUrl);
      return res.status(201).json({ shortenedUrl });
    }

  } catch (error) {
    console.error("Shortening error:", error); 
    return res.status(500).json({ message: "Server error." });
  }
});

router.get('/:url', async (req, res) => {
  try {
    const { url } = req.params;
    console.log(`Requested short URL: ${url}`);
    
    const fullShortUrl = `${req.protocol}://${req.get('host')}/${url}`;
    console.log(`Full short URL: ${fullShortUrl}`);
    
    const shortenedUrl = await Url.findOne({shortenedUrl: fullShortUrl})
    console.log('Database result:', shortenedUrl);
  
    if (shortenedUrl) {
      console.log(`Redirecting to: ${shortenedUrl.originalUrl}`);
      return res.redirect(shortenedUrl.originalUrl);
    } else {
      console.log('URL not found');
      return res.status(404).send('URL not found');
    }
  } catch (error) {
    console.error("Redirection error:", error); 
    return res.status(500).json({ message: "Server error." });
  }
});

router.get('/user/urls', verifyToken, async (req, res) => {
  try {
    // Fetch all URLs for the authenticated user
    const urls = await Url.find({ userId: req.userId })
      .sort({ createdAt: -1 }) // Sort by creation date, newest first
      .select('originalUrl shortenedUrl createdAt'); // Select only necessary fields

    // Return the URLs as JSON
    return res.status(200).json({ urls });
  } catch (error) {
    console.error("Error fetching user URLs:", error);
    return res.status(500).json({ message: "Server error." });
  }
});



module.exports = router;
