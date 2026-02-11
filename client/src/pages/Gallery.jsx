import React, { useState, useEffect } from 'react';
import api from '../api';
import './Gallery.css';

const Gallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });
    const [loading, setLoading] = useState(true);

    const categories = ["all", "alumni", "events", "contributions", "meetups", "achievements"];

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    useEffect(() => {
        filterGallery(activeCategory);
    }, [galleryItems, activeCategory]);

    const fetchGalleryItems = async () => {
        try {
            const response = await api.get('/gly-updpi');
            const data = response.data;
            const formattedItems = [];

            for (const category in data) {
                const items = data[category];
                items.forEach(item => {
                    formattedItems.push({
                        category: item.category,
                        imageUrl: item.imageUrl ? `/people/${item.imageUrl}` : '/default-image.jpg',
                        caption: item.caption || "No caption available"
                    });
                });
            }
            setGalleryItems(formattedItems);
        } catch (error) {
            console.error("Error fetching gallery items:", error);
        } finally {
            setLoading(false);
        }
    };

    const filterGallery = (category) => {
        if (category === 'all') {
            setFilteredItems(galleryItems);
        } else {
            setFilteredItems(galleryItems.filter(item => item.category === category));
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const openLightbox = (src, alt) => {
        setLightboxImage({ src, alt });
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <div className="gallery-page-container">
            <div className="main-content">
                {/* Header */}
                <div className="header">
                    <h1>Our Vibrant Gallery</h1>
                    <p>Celebrating Alumni, Events, Achievements, and More</p>
                </div>

                {/* Gallery Container */}
                <div className="gallery-container">
                    <div className="gallery-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(cat)}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div id="gallerySections">
                        {loading ? (
                            <p style={{ textAlign: 'center' }}>Loading...</p>
                        ) : filteredItems.length === 0 ? (
                            <p className="coming-soon">Coming Soon...</p>
                        ) : (
                            <div className="gallery-section">
                                <h2>{activeCategory === 'all' ? 'All' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</h2>
                                <div className="gallery">
                                    {filteredItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="gallery-item"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                            onClick={() => openLightbox(item.imageUrl, item.caption)}
                                        >
                                            <img src={item.imageUrl} alt={item.caption} />
                                            <div className="caption">{item.caption}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className={`lightbox active`} onClick={closeLightbox}>
                    <span className="close-btn" onClick={closeLightbox}>&times;</span>
                    <img
                        src={lightboxImage.src}
                        alt={lightboxImage.alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            {/* Footer */}
           
        </div>
    );
};

export default Gallery;
