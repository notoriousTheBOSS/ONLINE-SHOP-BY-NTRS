import React from 'react';
import CardOffer from './CardOffer';

const index = () => {
  return (
		<section>
			<div className="container mx-auto">
				<div className="offers">
					<div className="offers_info">
            {/* content */}
          </div>

					<ul>
						<li>
              <CardOffer/>
              </li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default index;